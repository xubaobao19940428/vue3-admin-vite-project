# X-Vue-Admin 项目

![Image text](./login.jpg)
## 目录

<!-- 1. [介绍](#介绍)
2. [功能](#功能)
3. [安装](#安装)
4. [使用](#使用)
5. [文件结构](#文件结构)
6. [使用技术](#使用技术)
7. [贡献](#贡献)
8. [许可](#许可) -->

## 介绍

这是一个使用 Vue 3、Vite 和 Pinia 构建的管理面板项目，旨在提供一个干净且响应式的界面来管理各种管理任务。

## 功能

-   ❎用户认证和授权
-   ❎动态路由和导航
-   ✅使用 Pinia 进行状态管理
-   ❎API 集成
-   ❎响应式设计
-   ❎模块化和可扩展的代码结构

## 安装

要在本地设置项目，请按照以下步骤操作：

1. 克隆仓库：
    ```sh
    git clone https://github.com/your-username/admin-project.git
    cd admin-project
    ```
2. 安装依赖项：
    ```sh
    npm install
    ```
3. 在根目录下创建 .env 文件，并添加必要的环境变量
    ```javascript
    VITE_API_URL=http://your-api-url.com
    ```

## 文件结构

```text
admin-project
├── public
│ └── favicon.ico
├── src
│ ├── assets
│ ├── components
│ ├── layouts
│ ├── pages
│ ├── router
│ ├── store
│ ├── styles
│ ├── utils
│ ├── App.vue
│ └── main.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

## 使用技术
- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)

