<template>
    <el-icon :size="size" :color="color">
        <span v-html="iconStr"></span>
    </el-icon>
</template>
<script name="ZbSvgIcon" setup lang="ts">
import { ElIcon } from "element-plus"

const props = defineProps<{
    iconStr:{
        type:String,
        required:true,
    },
    size:{
        type:Number | String,
        require:true,
        default:'18px'
    },
    color:{
        type:String,
        require:true,
        default:'#ffffff'
    }    
}>()
</script>
