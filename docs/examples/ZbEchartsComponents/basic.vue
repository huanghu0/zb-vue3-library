<template>
    <div class="echarts-content">
        <ZbEchartsComponents :opts="barEchartsOption"></ZbEchartsComponents>
    </div>  
</template>

<script setup lang="ts">
import { ref } from "vue"

const barEchartsOption = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
})

</script>

<style scoped>
.echarts-content{
  width: 600px;
  height: 600px;
}
</style>
