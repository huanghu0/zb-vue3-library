import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'

const app = createApp(App)


app.use(ElementPlus, { locale: zhCn,zIndex: 3000 })

app.mount('#app')
