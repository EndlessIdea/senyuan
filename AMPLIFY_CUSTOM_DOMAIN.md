# AWS Amplify 自定义域名配置指南

## 是的，Amplify 完全支持自定义域名！✅

Amplify 提供了非常简单的方式来配置自定义域名，而且**完全免费**（只需要支付域名的费用）。

---

## 详细配置步骤

### 步骤1：准备域名

你需要有一个域名。可以选择：

**选项A：使用现有域名**
- 如果你已经有域名（在任何注册商购买）
- 只需要将 DNS 管理权移交给 Route 53

**选项B：在 AWS 购买新域名**
- 在 Route 53 中购买域名
- 价格通常在 $10-20/年（.com 域名）

### 步骤2：在 Amplify 中添加自定义域名

1. **登录 AWS Console**
   - 进入 AWS Amplify Console
   - 选择你的应用

2. **进入域名设置**
   - 在左侧菜单，点击 "域名管理"（Domain Management）
   - 点击 "添加自定义域"（Add custom domain）

3. **输入域名**
   ```
   例如：morimotonaisou.com 或 www.morimotonaisou.com
   ```
   - 可以同时添加主域名和 www 子域名
   - Amplify 会自动处理重定向

4. **配置选项**
   - **子域名**：选择 `www` 或 `*`（支持通配符）
   - **验证域名所有权**：
     - 如果域名在 Route 53，自动验证
     - 如果在其他DNS服务商，需要添加DNS记录验证

---

## 方法一：使用 Route 53（推荐 - 最简单）

如果你使用 Route 53 管理域名，一切自动完成：

### 步骤1：在 Route 53 添加托管区域

1. 进入 **Route 53 服务**
2. 点击 **"托管区域"**（Hosted zones）
3. 点击 **"创建托管区域"**（Create hosted zone）

### 步骤2：添加或使用现有域名

**如果你已经有域名**：
- 在托管区域列表，找到你的域名
- 记录下 **NS 记录**的值

**如果你要注册新域名**：
- 在 Route 53 点击 **"注册域名"**
- 搜索并购买域名（如 `morimotonaisou.com`）

### 步骤3：在 Amplify 连接域名

1. 在 Amplify 的域名设置中
2. 输入你的域名
3. Amplify 会自动：
   - ✅ 检测 Route 53 中的域名
   - ✅ 自动创建SSL证书
   - ✅ 配置DNS记录
   - ✅ 在5-15分钟内完成所有配置

### 步骤4：等待SSL证书签发

- Amplify 会自动为你的域名申请SSL证书
- 状态会显示为 **"等待验证"** → **"可用"**
- 通常需要5-30分钟

---

## 方法二：使用其他DNS服务商（如GoDaddy、Namecheap等）

如果你在其他地方购买了域名：

### 步骤1：获取DNS验证记录

1. 在 Amplify 添加域名后
2. Amplify 会提供 **CNAME 验证记录**
   例如：
   ```
   _xxxxxxxxxxxxxxxxxx.yourdomain.com
   CNAME 到
   yyyyyyyyyy.acm-validations.aws.
   ```

### 步骤2：在你的DNS服务商添加记录

**GoDaddy 示例**：
1. 登录 GoDaddy
2. 进入 DNS 管理
3. 添加 **CNAME 记录**：
   - **名称**：`_xxxxxxxxxxxxxxxxxx`
   - **值**：`yyyyyyyyyy.acm-validations.aws.`
   - **TTL**：600（或默认）

**Namecheap 示例**：
1. 登录 Namecheap
2. 进入 **Advanced DNS**
3. 添加 **CNAME 记录**（同上）

### 步骤3：等待验证（通常5-60分钟）

验证成功后，Amplify 会继续部署SSL证书。

---

## 步骤3：获取 DNS 配置记录

Amplify 会生成必要的 DNS 记录，你需要将它们添加到你的DNS配置中：

### 需要添加的记录

通常 Amplify 会提供以下记录：

```
记录1: A 记录（IPv4）
名称：@
类型：A
值：1.2.3.4

记录2: CNAME 记录（www子域名）
名称：www
类型：CNAME
值：your-app.amplifyapp.com
```

### 在 Route 53 添加记录

如果在 Route 53：
1. 找到你的托管区域
2. Amplify 会自动添加这些记录（推荐）
3. 或者手动添加：

```
点击"创建记录"
- 名称：@ 或 www
- 类型：A 或 CNAME
- 路由策略：简单路由
- 值：按Amplify提供的值填写
```

### 在其他DNS服务商添加记录

如果在 GoDaddy/Namecheap：
1. 复制 Amplify 提供的DNS记录
2. 在你的DNS管理界面添加对应记录
3. 等待生效（5-60分钟）

---

## 配置完成后的状态

配置成功后，你会看到：

✅ **域名状态**：可用
✅ **SSL证书**：已签发
✅ **域名**：`https://yourdomain.com`
✅ **WWW重定向**：自动配置

---

## 常见配置示例

### 同时支持 main.com 和 www.main.com

Amplify 在添加域名时，会自动处理：

```
main.com          → 主域名
www.main.com      → www子域名
```

**自动配置**：
- 访问 `www.main.com` → 自动跳转到 `main.com`
- 访问 `main.com` → 正常工作
- 两者都使用HTTPS

### 使用子域名

如果只想使用子域名：

```
app.example.com
blog.example.com
```

在 Amplify 添加时输入完整的子域名。

---

## 验证和测试

### 检查域名状态

在 Amplify Console：
1. 域名管理页面
2. 看到 **"可用"** 状态
3. SSL证书显示 **"已签发"**

### 测试访问

```bash
# 访问你的网站
curl https://yourdomain.com

# 测试是否使用HTTPS
# 在浏览器中打开，地址栏显示🔒图标
```

### 验证DNS传播

使用在线工具检查DNS是否已更新：
- [dnschecker.org](https://dnschecker.org)
- 输入你的域名
- 查看DNS记录是否正确

---

## 常见问题解决

### 问题1：SSL证书签发失败

**原因**：DNS记录未正确配置
**解决**：
1. 检查DNS记录是否正确添加
2. 等待更长时间（可能需1-2小时）
3. 重新请求证书

### 问题2：域名显示"等待验证"

**原因**：验证DNS记录未添加
**解决**：
```bash
# 检查DNS记录是否正确
dig yourdomain.com
nslookup yourdomain.com
```

### 问题3：访问域名显示404

**原因**：DNS指向未更新
**解决**：
1. 检查DNS记录中的值
2. 确保指向 Amplify 提供的域名
3. 等待DNS传播（最多72小时，通常5-60分钟）

### 问题4：www重定向不工作

**原因**：未配置www记录
**解决**：
1. 在 Amplify 添加域名时同时添加 www 子域名
2. Amplify 会自动配置重定向

---

## 费用说明

### Amplify 自定义域名

- ✅ **完全免费**
- ✅ SSL证书自动申请和维护（免费）
- ✅ HTTPS自动配置（免费）
- ✅ 不受Amplify流量限制影响

### 域名费用

- 域名费用取决于注册商
- Route 53域名：约 $12-15/年（.com）
- GoDaddy/Namecheap：约 $10-20/年

### Amplify 托管费用

- 前12个月：**完全免费**（AWS免费层）
- 之后：约 $0.015/构建 + $0.023/GB存储
- 低流量网站：**基本免费**

**总结**：除了域名购买费用外，基本无其他费用。

---

## 最佳实践建议

### 1. 推荐使用 Route 53

- ✅ 与Amplify完美集成
- ✅ 自动DNS管理
- ✅ 一键配置
- ✅ 实时监控

### 2. 同时配置 www 和主域名

```
yourdomain.com     → 主要入口
www.yourdomain.com → 自动重定向到主域名
```

### 3. 启用HTTPS强制跳转

Amplify 自动完成，无需额外配置。

### 4. 配置自定义错误页面

在 Amplify 构建设置中，添加：

```yaml
version: 1
frontend:
  customHeaders:
    - pattern: '**/*'
      headers:
        - key: 'Strict-Transport-Security'
          value: 'max-age=31536000; includeSubDomains'
        - key: 'X-Frame-Options'
          value: 'SAMEORIGIN'
        - key: 'X-Content-Type-Options'
          value: 'nosniff'
```

---

## 配置完成后

你的网站将在以下URL可用：

- ✅ `https://yourdomain.com`
- ✅ `https://www.yourdomain.com`（自动跳转）
- ✅ 所有HTTP请求自动重定向到HTTPS
- ✅ SSL证书自动续期（无需手动操作）

---

## 监控和维护

### 查看访问统计

1. 在 Amplify Console
2. 点击 "监控"（Monitoring）
3. 查看：
   - 访问量
   - 带宽使用
   - 构建历史

### 设置通知

设置CloudWatch告警：
- 构建失败时收到通知
- 访问量异常时告警

---

## 总结

✅ **Amplify 自定义域名：完全支持**
✅ **配置简单：10-30分钟完成**
✅ **费用：除了域名外基本免费**
✅ **SSL证书：自动申请和维护**
✅ **HTTPS：自动配置**
✅ **监控：内置访问统计**

**推荐流程**：
1. 在 Route 53 购买或迁移域名（15分钟）
2. 在 Amplify 添加域名（5分钟）
3. 等待SSL证书签发（5-30分钟）
4. 完成！

现在你的网站就有专业的自定义域名了！🎉


