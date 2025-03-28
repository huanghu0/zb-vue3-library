<template>
    <div class="panel">
      <ZbDraggablePanel :columns="columns">
        <template v-for="item in columns" :key="item.id" #[item.id]>
          <div>
            {{ item.text }}
          </div>
        </template>
      </ZbDraggablePanel>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const columns = ref([{
  id:'12',
  text:'1'
},{
  id:'34',
  text:'2'
},{
  id:'56',
  text:'3'
},{
  id:'78',
  text:'4'
}
]) 

</script>

<style scoped>
.panel{
  height: 600px;
  width: 100%;
}
</style>
