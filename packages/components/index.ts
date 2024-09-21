import { ZbListTable } from './src/ListTable'
import { ZbSearchForm } from './src/SearchForm'
import type { App } from '@vue/runtime-core'

const components = [ZbListTable,ZbSearchForm]

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
export * from './types/index'

export default installer

