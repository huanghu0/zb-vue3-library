# ZbListTable组件

## 简介

列表组件 

## 基本用法

:::preview 防抖
demo-preview=../examples/ZbListTable/basic.vue
:::

## 传参说明

### Props参数

| 参数名         | 说明                    | 是否必填 | 参数类型            | 默认值                                                                                           |
| ----------- | --------------------- | ---- | --------------- | --------------------------------------------------------------------------------------------- |
| tableOption | 表格配置                  | 是    | TableOption     |                                                                                               |
| tableData   | 表格数据                  | 是    | obj[]           | []                                                                                            |
| tableList   | 表格每列渲染配置              | 是    | ColumnItem[]    | []                                                                                            |
| pageOption  | 分页配置                  | 是    | PageOptionItem  | { total: 0,      pageSize:20,     pageNo: 1,           pageSizes:[10, 20, 30, 50, 100]     }, |
| styleObject | 包裹表格元素样式              | 否    | string          | -                                                                                             |
| showHeader  | 是否展示表头                | 否    | boolean         | true                                                                                          |
| loading     | 请求表格数据时动态loading      | 否    | boolean         | false                                                                                         |
| tableKey    | 表格的key,元数据更新了用于重新渲染表格 | 否    | any,一般是生产的随机字符串 | -                                                                                             |

#### TableOption类型说明

| 字段名           | 说明                                            | 是否必填 | 参数类型    | 默认值   |
| ------------- | --------------------------------------------- | ---- | ------- | ----- |
| multiple      | 是否支持多选                                        | 否    | boolean | false |
| index         | 是否显示序号列                                       | 否    | boolean | true  |
| operateWidth  | 操作列宽度，有值就说明有操作列                               | 否    | string  | -     |
| hasPagination | 是否展示pagination                                | 否    | boolean | true  |
| maxHeight     | 列表最大高度                                        | 否    | number  | 500   |
| extraHeight   | 自动计算列表最大高度时，在页面改变大小的时候也会用到，除了header以外要额外去除的距离 | 否    | number  | 0     |
| fixed         | 操作列是否固定                                       | 否    | boolean | true  |
|               |                                               |      |         |       |
|               |                                               |      |         |       |
|               |                                               |      |         |       |
|               |                                               |      |         |       |

#### ColumnItem

待完成

#### PageOptionItem

待完成