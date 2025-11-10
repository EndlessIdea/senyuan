# 森源内装株式会社 - 官方网站

基于原网站 http://ojinaiso.com/ 的现代化 React 重构版本。

## 项目简介

这是一个使用现代前端技术栈（React + TypeScript + Vite）重新构建的日本建筑装修公司网站。

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理

## 功能特性

- ✅ 完全响应式设计
- ✅ 现代化 UI/UX
- ✅ 流畅的页面切换
- ✅ 简洁的代码结构
- ✅ TypeScript 类型支持

## 页面结构

- **ホーム** (/) - 首页，展示公司特色和服务
- **会社概要** (/about) - 公司信息和联系方式
- **業務内容** (/services) - 详细业务介绍和施工流程
- **実績例ギャラリー** (/gallery) - 实绩案例展示
- **お問合せ** (/contact) - 联系方式和问询表单
- **求人情報** (/recruit) - 招聘信息和应聘指南

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

构建后的文件在 `dist` 目录

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
ojinaiso-website/
├── public/          # 静态资源
├── src/
│   ├── components/  # 可复用组件
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── pages/      # 页面组件
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Recruit.tsx
│   ├── styles/     # 全局样式
│   │   └── pages.css
│   ├── App.tsx     # 主应用组件
│   ├── main.tsx    # 入口文件
│   └── index.css   # 全局CSS
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 设计特点

- 现代化渐变背景
- 卡片式布局
- 响应式网格系统
- 平滑过渡动画
- 直观的导航体验

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 开发规范

- 使用 TypeScript 进行开发
- 组件使用函数式写法
- CSS 使用独立的样式文件
- 遵循 React Hooks 最佳实践

## License

本项目为演示项目，仅用于学习目的。
