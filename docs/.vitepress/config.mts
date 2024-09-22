import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zb-vue3-ui",
  description: "vue3组件库 基于element-plus 适用于中后台项目",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/start' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '安装使用', link: '/components/start' },
        ]
      },
      {
        text:'组件',
        items:[
          { text:'列表',link:'/components/ZbListTable' },
          { text:'搜索表单', link:'/components/ZbSearchForm' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huanghu0/zb-vue3-library.git' }
    ]
  },
  base: '/zb-vue3-library/',
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },  
  vite: {
    resolve: {
      alias: {
        'zb-vue3-ui': '../../packages/components'
      }
    }
  }
})
