# ZbListTable组件

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