import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
plugins: [vue(),VueSetupExtend(),dts({ outDir: ['packages/zb-vue3-lib/es/packages/components', 'packages/zb-vue3-lib/lib/packages/components'] })],
   build:{
        rollupOptions: {
            external: ['vue', 'element-plus'],
            input: ['packages/components/index.ts'],
            output: [
              {
                format: 'es',
                //不用打包成.es.js,这里我们想把它打包成.js
                entryFileNames: '[name].mjs',
                //让打包目录和我们目录对应
                preserveModules: true,
                //配置打包根目录
                dir: './packages/zb-vue3-lib/es'
              },
              {
                format: 'cjs',
                entryFileNames: '[name].js',
                //让打包目录和我们目录对应
                preserveModules: true,
                //配置打包根目录
                dir: './packages/zb-vue3-lib/lib'
              }
            ]            
        },
        lib:{
            entry:'./packages/components/index.ts'
        }    
   } 
})