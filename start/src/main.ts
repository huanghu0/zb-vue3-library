import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import 'zb-vue3-ui/es/style.css'
import { ZbUiInstall } from 'zb-vue3-ui'

const app = createApp(App)


app.use(ElementPlus, { locale: zhCn,zIndex: 3000 })
app.use(ZbUiInstall)

app.mount('#app')
