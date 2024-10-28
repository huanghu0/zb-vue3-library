# ZbSearchForm组件

## 简介

搜索表单组件 

## 基本用法

:::preview 防抖
demo-preview=../examples/ZbSearchForm/basic.vue
:::

## 传参说明

### props传参

| 参数名               | 说明                   | 是否必填 | 参数类型             | 默认值   |
| ----------------- | -------------------- | ---- | ---------------- | ----- |
| searchList        | 表单元素列表               | 是    | SearchItem[],见下方 | []    |
| searchParam       | 表单绑定的参数值             | 是    | obj              | {}    |
| searchFormRule    | 表单提交时的校验规则           | 否    | 同el-form的表单规则    | []    |
| formStyleObject   | 给el-form添加的style样式对象 | 否    | string           |       |
| buttonStyleObject | 给button栏添加的style样式对象 | 否    | string           |       |
| canReset          | 是否展示重置按钮             | 否    | boolean          | true  |
| showAll           | 是否展示所有按钮             | 否    | boolean          | false |
| searchBtnTxt      | 搜索按钮展示的文字            | 否    | string           | 搜索    |

### 回调事件说明

| 事件名       | 说明          | 是否必填 | 事件参数             |
| --------- | ----------- | ---- | ---------------- |
| search    | 搜索          | 是    |                  |
| reset     | 重置          | 否    |                  |
| changeVal | select值改变回调 | 否    | (val,searchItem) |

### SearchItem参数说明

| 参数名            | 说明                                                   | 是否必填 | 参数类型                                     | 可用值                                           | 默认值 |
| -------------- | ---------------------------------------------------- | ---- | ---------------------------------------- | --------------------------------------------- | --- |
| label          | 字段中文                                                 | 是    | string                                   |                                               |     |
| prop           | 字段                                                   | 是    | string                                   |                                               |     |
| multiple       | 是否为多选,选择的时候用到的属性                                     | 否    | boolean                                  |                                               |     |
| type           | 组件的类型                                                | 是    | string                                   | el-select,el-input,el-date-picker,el-cascader |     |
| options        | 选择组件的选项数组                                            | 否    | Array<{label,value,..}>                  |                                               |     |
| defaultOptions | 选择组件的默认值选项数组，只有filterable为true，才需要这个，用来存初始值筛选过滤用     | 否    | Array<{label,value,..}>                  |                                               |     |
| required       | 是否必填                                                 | 否    | boolean                                  |                                               |     |
| placeholder    | 组件内部说明                                               | 否    | string                                   |                                               |     |
| width          | 组件宽度                                                 | 否    | string                                   |                                               |     |
| filterable     | 是否可以筛选                                               | 否    | string                                   |                                               |     |
| filterKey      | 只有filterable为true，才需要这个，用来判断过滤需要匹配哪几个对象里的key         | 否    | string[]                                 |                                               |     |
| isShow         | 某item出现的前置条件，第一个元素一般是前置条件字段,第二个元素是一个数组,表示前置条件满足的值才出现 | 否    | Array                                    |                                               |     |
| isShowFunc     | 某item出现的前置函数,搜索条件的前置可以通过自定义的函数来判断,                   | 否    | Function(searchParam),searchParam是整个表单的值 |                                               |     |
| shortcuts      | 日期选择器上使用，快捷日期                                        | 否    | 同el-date-picker上的shortcuts               |                                               |     |
| dataType       | 日期选择器的类型                                             | 否    | 同el-date-picker上的type                    |                                               |     |
| enterKeyEvent  | 是否支持直接enter搜索                                        | 否    | boolean                                  |                                               |     |
| notTrim        | 是否不去掉文本前后的空格，el-input上用                              | 否    | boolean                                  |                                               |     |
| showAllLevels  | 级联选择使用，是否展示所有的层                                      | 否    | boolean                                  |                                               |     |
| filterMethod   | 级联选择自定义搜索方法,filter-method                            | 否    | Function                                 |                                               |     |
| clearable      | 是否可清空,el-select                                      | 否    | boolean                                  |                                               |     |
| format         | 时间类型展示样式                                             | 否    | string                                   | 同el-date-picker                               |     |
| valueFormat    | 时间对应值的展示样式                                           | 否    | string                                   | 同el-date-picker                               |     |
| cascaderProps  | 级联类型的props,el-cascader                               | 否    | obj，同el-cascader的props                   |                                               |     |
| tooltip        | tooltip的内容,有这个字段则有tooltip                            | 否    | string                                   |                                               |     |