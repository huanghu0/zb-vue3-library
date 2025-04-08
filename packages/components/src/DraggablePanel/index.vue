<template>
  <div class="draggable-panel">
    <div
      v-for="(column,index) in columns"
      :key="column.id"
      class="column"
      :style="{ width: column.width  + 'px' }"
    >
      
        <!-- 使用具名插槽，让用户自定义内容 -->
        <div class="content" :style="{ width: (column.width - 8) + 'px'}">
            <slot :name="column.id"></slot>
        </div>
        <div v-if="index !== columns.length - 1" class="resizer" @mousedown="startResize(index, $event)"></div>
    </div>
  </div>
</template>

<script name="ZbDraggablePanel" setup>
import { ref,watch,nextTick, onMounted,onUnmounted } from 'vue';



const props = defineProps({
  columns: {
    type: Array,
    required: true,
    default:[]
  }
});


watch(
    () => props.columns.length, 
    (columns) => {
        setTimeout(() => {
            let width = document.querySelector('.draggable-panel').clientWidth; 
            props.columns.forEach((column) => {
                column.width = width / columns;
            });
        },200)

    }, 
    { immediate: true,deep:true }
);

const startResize = (index, event) => {
  const startX = event.clientX;
  const startWidth = props.columns[index].width || 100;
  const nextStartWidth = props.columns[index + 1].width || 100;

  const resize = (e) => {
    let newWidth = startWidth + (e.clientX - startX);
    let nextNewWidth = nextStartWidth - (e.clientX - startX);
    // if(newWidth < 100){
    //     newWidth = 100
    //     nextNewWidth = nextNewWidth - (100 - newWidth)
    // }else if(nextNewWidth < 100){
    //     nextNewWidth = 100
    //     newWidth = newWidth - (100 - nextNewWidth)
    // }
    props.columns[index].width = Math.max(100, newWidth); // 最小宽度限制为100px
    props.columns[index + 1].width = Math.max(100, nextNewWidth);
  };

  const stopResize = () => {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
  };

  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
};

const handleMouseWheel = (event) => {
  setTimeout(() => {
      let width = document.querySelector('.draggable-panel').scrollWidth; 
      props.columns.forEach((column) => {
          column.width = width / props.columns.length;
      });
  },200)  
};

const handleResize = () => {
  console.log('resize')
  setTimeout(() => {
      let width = document.querySelector('.draggable-panel').scrollWidth; 
      props.columns.forEach((column) => {
          column.width = width / props.columns.length;
      });
  },200)   
}

onMounted(() => {
  document.addEventListener('wheel', handleMouseWheel);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('wheel', handleMouseWheel);
  window.removeEventListener('resize', handleResize);
});

</script>

<style scoped lang="scss">
.draggable-panel {
    display: flex;
    width: 100%;
    height: 100%;
    .column {
        display: flex;
        min-width: 100px;
        height: 100%;
        .content{
            // margin-right: 3px;
            // overflow: auto;
        }
        .resizer {
            width: 2px;
            background: #ccc;
            cursor: ew-resize;
            height: 100%;
            margin-right: 3px;
            margin-left: 3px;
        }  
    }
}
</style>