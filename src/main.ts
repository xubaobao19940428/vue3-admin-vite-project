import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import './styles/index.scss'
import '@/mock/index' // 此次进行引用
import { createPinia } from 'pinia'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)

app.use(createPinia())
app.mount('#app')
app.use(ElementPlus, { locale })
