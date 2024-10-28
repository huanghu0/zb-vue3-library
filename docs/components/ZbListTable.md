# ZbListTable组件

## 简介

列表组件 

## 基本用法

:::preview 防抖
demo-preview=../examples/ZbListTable/basic.vue
:::

## 传参说明

### Props参数

| 参数名         | 说明                    | 是否必填 | 参数类型               | 默认值                                                                                           |
| ----------- | --------------------- | ---- | ------------------ | --------------------------------------------------------------------------------------------- |
| tableOption | 表格配置                  | 是    | TableOption,见下方    |                                                                                               |
| tableData   | 表格数据                  | 是    | obj[]              | []                                                                                            |
| tableList   | 表格每列渲染配置              | 是    | ColumnItem[],见下方   | []                                                                                            |
| pageOption  | 分页配置                  | 是    | PageOptionItem,见下方 | { total: 0,      pageSize:20,     pageNo: 1,           pageSizes:[10, 20, 30, 50, 100]     }, |
| styleObject | 包裹表格元素样式              | 否    | string             | -                                                                                             |
| showHeader  | 是否展示表头                | 否    | boolean            | true                                                                                          |
| loading     | 请求表格数据时动态loading      | 否    | boolean            | false                                                                                         |
| tableKey    | 表格的key,元数据更新了用于重新渲染表格 | 否    | any,一般是生产的随机字符串    | -                                                                                             |

#### TableOption类型说明

| 字段名              | 说明                                            | 是否必填 | 参数类型           | 默认值   |
| ---------------- | --------------------------------------------- | ---- | -------------- | ----- |
| multiple         | 是否支持多选                                        | 否    | boolean        | false |
| index            | 是否显示序号列                                       | 否    | boolean        | true  |
| operateWidth     | 操作列宽度，有值就说明有操作列                               | 否    | string         | -     |
| hasPagination    | 是否展示pagination                                | 否    | boolean        | true  |
| maxHeight        | 列表最大高度                                        | 否    | number         | 500   |
| extraHeight      | 自动计算列表最大高度时，在页面改变大小的时候也会用到，除了header以外要额外去除的距离 | 否    | number         | 0     |
| fixed            | 操作列是否固定                                       | 否    | boolean        | true  |
| headerCellStyle  | 表头单元的样式                                       | 否    | obj            |       |
| rowKey           | 同el-table的row-key                             | 否    | number\|string |       |
| reserveSelection | 多选是否保留当前的选中项，同el-table的reserveSelection，      | 否    | boolean        |       |
| border           | 是否带有边框                                        | 否    | boolean        |       |
| indexMethod      | 自定义索引方法,需要index为true                          | 否    | Function       |       |
| indexLabel       | 索引列的label,需要index为true                        | 否    | string         |       |
| indexWidth       | 索引列的宽度,需要index为true                           | 否    | string         |       |

#### ColumnItem

| 字段名                          | 说明                                    | 是否必填 | 参数类型              | 默认值 |
| ---------------------------- | ------------------------------------- | ---- | ----------------- | --- |
| label                        | 表格字段对应的展示内容                           | 是    | string            |     |
| prop                         | 表格对应字段                                | 是    | string            |     |
| width                        | 表格宽度                                  | 否    | string \| number  |     |
| minWidth                     | 最小宽度                                  | 否    | string \| number  |     |
| tooltip                      | 展示内容的tooltip                          | 否    | string            |     |
| designTooltipContentInFormat | 在format模式下使用自定义tooltip，需要关闭自带的tooltip | 否    | string            |     |
| alignRight                   | 是否靠右                                  | 否    | boolean           |     |
| fixed                        | 列是否固定,和el-table-column的fixed一样        | 否    | boolean           |     |
| format                       | 自定义展示函数                               | 否    | Function(row)     |     |
| headerToolTip                | 表格头是否展示tooltip                        | 否    | string            |     |
| method                       | 自定义内容的method                          | 否    | Function(row)     |     |
| disabledTootip               | 自定义展示的tooltip                         | 否    | Function(row)     |     |
| vueComponent                 | 展示的内容可以是一个组件                          | 否    | any               |     |
| slot                         | 是否插槽 自定义表格内容                          | 否    | boolean           |     |
| sortable                     | 列是否可以排序                               | 否    | boolean \| string |     |

#### PageOptionItem

| 字段名                      | 说明                                  | 是否必填 | 参数类型          | 默认值 |
| ------------------------ | ----------------------------------- | ---- | ------------- | --- |
| total                    | 表格总条数,同el-pagination的total          | 是    | number        |     |
| pageSize                 | 每页大小,同el-pagination的page-size       | 是    | number        |     |
| pageNo                   | 当前页是那一页，同el-pagination的current-page | 是    | number        |     |
| pageSizes                | 每页大小配置，同el-pagination的page-sizes    | 是    | Array[number] |     |
| layout                   | 分页展示组件，同el-pagination的layout        | 是    | string        |     |
| paginationContainerStyle | 包裹分页组件容器样式                          | 否    | string\|obj   |     |