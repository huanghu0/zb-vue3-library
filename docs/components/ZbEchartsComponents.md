# ZbEchartsComponents组件

## 简介

渲染echarts组件 

## 基本用法

:::preview 防抖
demo-preview=../examples/ZbEchartsComponents/basic.vue
:::

## 传参说明

### Props参数

| 参数名  | 说明                  | 是否必填 | 参数类型 | 默认值 |
| ---- | ------------------- | ---- | ---- | --- |
| opts | echarts配置参数 options | 是    | obj  | {}  |

#### 组件导出echarts实例

| 导出值             | 说明          | 获取方式            | 使用方式说明                           |
| --------------- | ----------- | --------------- | -------------------------------- |
| echartsInstance | echarts组件实例 | 通过组件使用时绑定的ref获取 | 可以通过echarts组件实例绑定函数等，参考echarts官网 |