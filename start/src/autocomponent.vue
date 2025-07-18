<template>
    <el-radio-group v-model="searchParam[field]">
      <el-radio :value="1" size="small">1</el-radio>
      <el-radio :value="2" size="small">2</el-radio>
    </el-radio-group>
</template>

<script setup>
const props = defineProps({
  searchParam: {
    type: Object,
    required: true
  },
  field: {
    type:Number,
    required:true
  },
}) 


</script>
<style lang="scss">
    
</style>