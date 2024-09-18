export interface OptionItem {
    label: string | number | boolean | null | undefined
    value: string | number | boolean | null | undefined
    [propName: string]: any
}

export interface ColumnItem {
    label: string
    prop: string
    width?: string | number
    minWidth?: string | number
    tooltip?: boolean // 展示内容的tooltip
    designTooltipContentInFormat?: any //在format模式下使用自定义tooltip，需要关闭自带的tooltip
    alignRight?: boolean
    fixed?: boolean
    format?: any
    headerToolTip?: string // 表格头是否展示tooltip
    method?: Function
    disabledTootip?: Function
    vueComponent?: any // 展示的内容可以是一个组件
    slot?: boolean // 是否插槽 自定义表格内容
    sortable?: boolean | string // 列是否可以排序
}

export interface SearchItem {
    label: string
    prop: string
    multiple?: boolean
    type: string
    options?: Array<OptionItem> // 里面的showLabel是展示下拉框时候的格式，支持传html标签
    defaultOptions?: Array<OptionItem> // 只有filterable为true，才需要这个，用来存初始值过滤用
    required?: boolean // 是否必填，备用
    placeholder?: string
    width?: string
    filterable?: boolean
    filterKey?: string[] // 只有filterable为true，才需要这个，用来判断过滤需要匹配哪几个对象里的key
    extraHeight?: boolean
    remoteMethod?: any
    defaultData?: any //默认值
    isShow?: any //某item出现的前置条件
    isShowFunc?: Function //某item出现的前置条件
    shortcuts?: any //日期选择器上使用
    dataType?: any //日期选择器的类型
    tooltip?: string //tooltip的内容
    enterKeyEvent?: boolean //是否支持直接enter搜索
    notTrim?: boolean
    checkStrictly?: boolean // 级联选择使用
    showAllLevels?: boolean
    class?: string //样式
    filterMethod?: any //自定义搜索函数
    clearable?: boolean
    format?: string // 时间类型展示样式
    valueFormat?: string // 时间对应值的展示样式
}

export interface PageOptionItem {
    total: number
    pageSize: number
    pageNo: number
}

export interface Ifn {
    (row: any): any
}