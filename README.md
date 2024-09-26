# X-Vue-Admin 项目

这是一个基于 Vue 3、Vite 和 Pinia 构建的现代管理面板项目，旨在为开发者提供一套干净、高效、模块化的解决方案来构建复杂的管理后台系统。

![Image text](./login.jpg)

## 目录

1. [介绍](#介绍)
2. [功能](#功能)
3. [安装](#安装)
4. [使用](#使用)
5. [文件结构](#文件结构)
6. [使用技术](#使用技术)
7. [贡献](#贡献)

## 介绍

X-Vue-Admin 项目使用最新的前端技术栈，包括 Vue 3、Vite、Pinia 和 Vue Router，集成了 API 请求、动态路由、用户认证等常见的管理面板功能。该项目高度可扩展，允许开发者轻松地进行定制和扩展。

## 功能

- ✅ **用户认证和授权**：集成 JWT 或 OAuth 等常见认证机制。
- ❎ **动态路由和导航**：支持基于用户权限的动态路由。
- ✅ **使用 Pinia 进行状态管理**：轻量、灵活的状态管理方案。
- ✅ **API 集成**：通过 Axios 实现与后端 API 的无缝交互。
- ❎ **响应式设计**：适用于桌面和移动设备的响应式布局。
- ❎ **模块化和可扩展的代码结构**：易于维护和扩展。

## 安装

要在本地环境中运行该项目，请按照以下步骤操作：

1. 克隆仓库：
    ```bash
    git clone https://github.com/xubaoer19940428/vue3-admin-vite-project.git
    
    cd admin-project
    ```

2. 安装依赖项：
    ```bash
    npm install
    ```

3. 配置环境变量：
    在项目根目录下创建 `.env` 文件，并添加必要的环境变量，例如 API 的 URL。
    ```env
    VITE_API_URL=http://your-api-url.com
    ```

4. 启动开发服务器：
    ```bash
    npm run dev
    ```

5. 构建生产版本：
    ```bash
    npm run build
    ```

## 使用

### 开发模式

在开发过程中，您可以使用 `npm run dev` 启动本地开发服务器，它将监听代码变化并实时更新页面。

### 生产模式

在生产环境中，您可以使用 `npm run build` 生成优化的静态文件。生成的文件位于 `dist` 目录中，可以通过任何静态文件服务器进行托管。

## 文件结构

```bash
admin-project
├── public                # 公共资源文件，如 favicon 等
│ └── favicon.ico
├── src                   # 源代码
│ ├── assets              # 静态资源，如图片、字体等
│ ├── components          # 公用组件
│ ├── layouts             # 页面布局
│ ├── pages               # 各种页面视图
│ ├── router              # 路由配置
│ ├── store               # Pinia 状态管理
│ ├── styles              # 全局样式文件
│ ├── utils               # 工具函数
│ ├── App.vue             # 主应用文件
│ └── main.js             # 项目入口文件
├── .env                  # 环境变量配置
├── .gitignore            # Git 忽略文件
├── index.html            # 主 HTML 文件
├── package.json          # 项目依赖配置
├── README.md             # 项目文档
└── vite.config.ts        # Vite 配置文件
```

## 使用技术
- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
  
## 贡献
我们欢迎所有人贡献代码！如果你想为此项目做贡献，请遵循以下步骤：
- Fork 本项目到你的 GitHub。
- 创建一个新的分支：
```bash
git checkout -b my-feature-branch
```
- 提交你的更改：
```bash
git commit -m "Add new feature"
```
- 推送分支到你的仓库：
```bash
git push origin my-feature-branch
```
- 创建一个 Pull Request。
