# AWS 部署指南

## 部署前准备

### 1. 构建生产版本

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build
```

构建完成后，生成的文件在 `dist` 目录中。

---

## 方式一：S3 + CloudFront（推荐 - 成本最低）

### 步骤1：创建S3存储桶

1. 登录 AWS Console
2. 进入 S3 服务
3. 点击"创建存储桶"
4. 配置存储桶：
   - **存储桶名称**：`morimotonaisou-website`（或其他唯一名称）
   - **区域**：选择离你最近的地理位置（建议：ap-northeast-1 东京）
   - **阻止所有公共访问设置**：取消勾选，允许公共读取
5. 创建存储桶

### 步骤2：上传网站文件

1. 进入刚创建的存储桶
2. 点击"上传"
3. 将 `dist` 目录中的所有文件上传
4. 上传后，确保 `index.html` 在根目录

### 步骤3：配置静态网站托管

1. 在存储桶页面，点击"属性"标签
2. 滚动到"静态网站托管"
3. 点击"编辑"
4. 启用静态网站托管
5. 设置：
   - **索引文档**：`index.html`
   - **错误文档**：`index.html`（让React Router处理404）
6. 保存更改
7. 记下"网站端点"URL（类似：`http://xxx.s3-website-ap-northeast-1.amazonaws.com`）

### 步骤4：设置存储桶策略（允许公共访问）

1. 在存储桶页面，点击"权限"标签
2. 找到"存储桶策略"，点击"编辑"
3. 添加以下策略（将 `BUCKET_NAME` 替换为你的存储桶名称）：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

4. 保存更改

### 步骤5：创建CloudFront分发（推荐 - 可选）

**为什么需要CloudFront？**
- 更快的全球访问速度（CDN）
- HTTPS支持
- 更好的安全性

1. 进入 CloudFront 服务
2. 点击"创建分发"
3. 源域名：选择你的S3存储桶
4. 配置：
   - **名称**：`morimotonaisou-cdn`
   - **查看器协议策略**：Redirect HTTP to HTTPS
   - **默认根对象**：`index.html`
   - **错误页面**：添加自定义错误响应：
     - HTTP错误代码：`403`
     - 响应页面路径：`/index.html`
     - HTTP响应代码：`200`
   - 同样配置 `404` 错误
5. 创建分发（需要5-10分钟）
6. 分发完成后，记下"域名"（如：`d1234567890.cloudfront.net`）

---

## 方式二：AWS Amplify（最简单 - 自动化部署）

### 步骤1：准备代码仓库

1. 在GitHub/GitLab创建仓库
2. 推送代码到仓库

```bash
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/morimotonaisou-website.git
git push -u origin main
```

### 步骤2：使用Amplify部署

1. 进入 AWS Amplify Console
2. 点击"新建应用" > "托管 Web 应用"
3. 连接你的代码仓库
4. Amplify会自动检测构建设置
5. 确认构建设置（默认配置通常已足够）：
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   ```
6. 保存并部署
7. 等待部署完成（约5-10分钟）
8. 获得网站的URL（如：`https://xxx.amplifyapp.com`）

### 优势
- ✅ 自动CI/CD（推送到代码仓库后自动重新部署）
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 自动构建和部署

---

## 方式三：EC2（适合需要更多控制的场景）

### 步骤1：启动EC2实例

1. 进入 EC2 控制台
2. 启动实例：
   - AMI：Amazon Linux 2023
   - 实例类型：t2.micro（免费层）
   - 配置安全组：允许HTTP(80)和HTTPS(443)
3. 连接到实例

### 步骤2：安装Nginx

```bash
# 更新系统
sudo yum update -y

# 安装Nginx
sudo amazon-linux-extras install nginx1 -y

# 启动Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 步骤3：上传网站文件

```bash
# 创建网站目录
sudo mkdir -p /var/www/html

# 使用SCP上传文件（从本地）
scp -r dist/* ec2-user@YOUR_EC2_IP:/var/www/html/

# 或直接在EC2上构建
# 需要先安装Node.js和npm
```

### 步骤4：配置Nginx

```bash
# 编辑配置
sudo vi /etc/nginx/conf.d/default.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name _;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
# 重启Nginx
sudo systemctl restart nginx
```

---

## 配置自定义域名（可选）

### 使用Route 53

1. 购买域名（或在已有域名添加子域名）
2. 在Route 53中创建托管区域
3. 更新域名的NS记录
4. 创建A记录（对于CloudFront，创建CNAME记录）

---

## 成本估算

### S3 + CloudFront
- **S3存储**：约 $0.023/GB/月
- **数据传输**：前10GB免费，之后约 $0.085/GB
- **CloudFront**：前50GB免费，之后约 $0.085/GB
- **预计每月成本**：<$1（低流量网站）

### AWS Amplify
- 包含5GB存储和15GB数据传输免费
- 超出后按使用量计费
- **预计每月成本**：<$1（低流量网站）

### EC2
- t2.micro实例：符合免费层（首年免费）
- **预计每月成本**：$0（首年后约$8-10）

---

## 安全建议

1. **启用HTTPS**（CloudFront和Amplify自动提供）
2. **设置适当的CORS策略**
3. **定期更新依赖**：`npm audit fix`
4. **启用AWS WAF**（可选，针对CloudFront）
5. **定期备份**（S3自动版本控制）

---

## 持续集成部署（CI/CD）

### GitHub Actions 示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install and Build
        run: |
          npm install
          npm run build
          
      - name: Deploy to S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ap-northeast-1
        run: |
          aws s3 sync dist/ s3://your-bucket-name --delete
          aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## 推荐部署方案

**对于此项目，推荐使用方式2（AWS Amplify）**，因为：

1. ✅ 最简单 - 几分钟内完成
2. ✅ 自动CI/CD - 代码更新自动部署
3. ✅ 内置HTTPS和CDN
4. ✅ 成本极低（约$0-1/月）
5. ✅ 良好的AWS集成

**快速开始命令**：

```bash
# 1. 初始化Git仓库
git init
git add .
git commit -m "Initial commit"

# 2. 连接到GitHub（创建新仓库后）
git remote add origin https://github.com/yourusername/repo.git
git push -u origin main

# 3. 在AWS Amplify中连接仓库即可自动部署
```

---

## 故障排除

### 问题1：React Router 404错误
**解决方案**：配置错误处理，所有路由重定向到 `index.html`

### 问题2：资源加载失败
**解决方案**：检查Vite配置文件中的base路径设置

### 问题3：构建失败
**解决方案**：
```bash
# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 监控和维护

1. **启用CloudWatch监控**
2. **设置告警**（流量异常、错误率）
3. **定期检查日志**（S3访问日志、CloudFront日志）
4. **执行定期备份**（S3版本控制）


