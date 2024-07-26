import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引用echarts
import * as echarts from 'echarts'

//引用vueRouter
import router from './router/index'
import './styles/index.scss'
//引用mock.js
import '@/mock/index'
import { createPinia } from 'pinia'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//注册echarts

app.config.globalProperties.$echarts = echarts

app.use(router)

app.use(createPinia())
app.mount('#app')
app.use(ElementPlus, { locale })
