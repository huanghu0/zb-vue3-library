import { ZbListTable } from './src/ListTable'
import { ZbSearchForm } from './src/SearchForm'
import { ZbSvgIcon } from './src/SvgIcon'
import {  ZbEchartsComponents } from './src/echarts'
import {  ZbDraggablePanel } from './src/DraggablePanel'
import type { App } from '@vue/runtime-core'

const components = [ZbListTable,ZbSearchForm,ZbSvgIcon,ZbEchartsComponents,ZbDraggablePanel]

const makeInstaller = (comments:any) => {
    const install = (app:App,options?:any) => {
        comments.forEach((c:any) => {
            let name = c.name || c.__name
            app.component(name,c)
        })
    }

    return {
        install
    }
} 

const installer  = makeInstaller(components)
export const ZbUiInstall = installer.install

export * from './src/ListTable'
export * from './src/SearchForm'
export * from './src/SvgIcon'
export * from './src/echarts'
export * from './src/DraggablePanel'

export * from './types/index'


export default installer

