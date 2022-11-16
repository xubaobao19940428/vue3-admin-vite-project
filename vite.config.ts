import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd()) // 获取.env文件里定义的环境变量
    return defineConfig({
        base: env.VITE_APP_BASE_URL,
        server: {
            proxy: {
                // 选项写法
                '/meta/': {
                    target: 'https://gateway.mehome.shop/',
                    // target: 'https://gateway-pre.memall.shop/', //预发
                    // target: 'https://gateway.melive.shop/', // 线上
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/meta/, 'meta/')
                    // {
                    //     '^/meta/': 'meta/',
                    // },
                },
                // 正则表达式写法
                '^/fallback/.*': {
                    target: 'http://jsonplaceholder.typicode.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/fallback/, ''),
                },
            },
            port: 8081,
            https: false,
            cors: true,
            hmr: true,
        },
        plugins: [
            vue(),
            ViteComponents({
                customComponentResolvers: [ElementPlusResolver({ importStyle: true })],
            }),
            // styleImport({
            //     libs: [{
            //         libraryName: 'element-plus',
            //         esModule: true,
            //         ensureStyleFile: true,
            //         resolveStyle: (name) => {
            //             return `element-plus/packages/theme-chalk/src/${name}.css`
            //         },
            //         resolveComponent: (name) => {
            //             return `element-plus/lib/${name}`
            //         },
            //     }, ],
            // }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/styles/main.scss";',
                },
            },
        },
        build: {
            sourcemap: false,
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[name]-[hash].[ext]',
                },
                brotliSize: false, // 不统计
                target: 'esnext',
                minify: 'esbuild', // 混淆器，terser构建后文件体积更小
            },
        },
    })
}