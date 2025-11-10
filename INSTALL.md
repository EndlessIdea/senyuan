# 安装和运行指南

## 前提条件

确保你的系统已安装：

- Node.js (版本 16 或更高)
- npm 或 yarn

## 快速开始

### 1. 进入项目目录

```bash
cd ojinaiso-website
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 在浏览器中打开

访问 http://localhost:5173

## 可用的命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run lint` | 运行代码检查 |

## 项目特色

- 🎨 现代化的 UI 设计
- 📱 完全响应式布局
- ⚡ 快速的页面加载
- 🔄 流畅的页面切换
- 🎯 清晰的代码结构

## 开发建议

1. 使用 VS Code 作为编辑器
2. 安装推荐的扩展：ESLint, Prettier
3. 遵循 TypeScript 类型规范
4. 保持组件代码简洁和可复用

## 常见问题

### 依赖安装失败

如果遇到依赖安装问题，请尝试：

```bash
rm -rf node_modules package-lock.json
npm install
```

### 端口被占用

如果 5173 端口被占用，Vite 会自动尝试下一个可用端口。

### TypeScript 错误

确保安装了所有依赖，特别是 `@types/*` 包。
