import DefaultTheme from 'vitepress/theme'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@vitepress-demo-preview/component/dist/style.css'
import 'element-plus/dist/index.css'
import 'zb-vue3-ui/es/style.css'
import { ZbUiInstall } from 'zb-vue3-ui'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.component('demo-preview', ElementPlusContainer)
    app.use(ElementPlus, { locale: zhCn })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }    
    app.use(ZbUiInstall)
  }
}
