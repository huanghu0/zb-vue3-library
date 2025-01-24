<template>
    <div class="echarts-wrap" v-loading="opts.loading" element-loading-text="数据加载中,请稍后">
        <div class="echarts-container" id="echarts-container" ref="echartsContainer"></div>
    </div>
</template>

<script name="ZbEchartsComponents" setup>
import { markRaw, onBeforeUnmount, onMounted, ref, watch } from "vue"
import * as echarts from 'echarts';
import * as _ from 'lodash'

const props = defineProps({
    opts:{
        type:Object,
        defualt:{},
        required: true
    }
})


const echartsInstance = ref()
const echartsContainer = ref()

const debounceSync = _.debounce(sync,300)

const debouncedResize = _.debounce(() => {
    if(echartsInstance.value){
        echartsInstance.value?.resize()
    }
}, 300)

// 监听echarts容器大小变化
const resizeObserver = new ResizeObserver(debouncedResize)

// 监听opts变化
watch(() => props.opts,(newVal) => {
    console.log(newVal,'props.opts change')
    if(!echartsInstance.value){
        echartsInstance.value = markRaw(echarts.init(echartsContainer.value)) 
    }

    debounceSync(newVal)
},{
    deep:true
})


function sync(opts){
    let newOptions = {...opts}
    echartsInstance.value?.clear()
    setTimeout(() => {
        echartsInstance.value?.setOption(newOptions,true)
    },300)
}

function observerEchartsSize(){
    if(echartsContainer.value){
        resizeObserver.observe(echartsContainer.value)
    }
}

function unObserverEchartsResize(){
    if(echartsContainer.value){
        resizeObserver.unobserve(echartsContainer.value)
    }
}

// 绘制图表
function draw(){
    echartsInstance.value = markRaw(echarts.init(echartsContainer.value)) 
    echartsInstance.value.setOption(props.opts,true)
    observerEchartsSize()
}

onMounted(() => {
    draw()
})

onBeforeUnmount(() => {
    unObserverEchartsResize()
    echartsInstance.value?.dispose()
})

defineExpose({
    echartsInstance
})


</script>

<style lang="scss" scoped>
.echarts-wrap{
    height: 100%;
    width: 100%;
}
.echarts-container{
    height: 100%;
    width: 100%;
}
</style>