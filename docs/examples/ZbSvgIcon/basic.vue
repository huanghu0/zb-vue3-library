<template>
  <div>
    <ZbSvgIcon
      size="40px"
      color="#1a9b3c"
      :iconStr="iconStr"
    >
    </ZbSvgIcon>  
    <ZbSvgIcon
      size="20px"
      color="#ff5600"
      :iconStr="iconStr"
    >    
    </ZbSvgIcon>
    <ZbSvgIcon
      :size="20"
      color="#ff5600"
      :iconStr="iconStr"
    >    
    </ZbSvgIcon>        

  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"

const iconStr = ref(`<svg t="1727680486563" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="877" width="40" height="40"><path d="M213.333333 896H128v-42.666667a299.008 299.008 0 0 1 298.666667-298.666666h170.666666a299.008 299.008 0 0 1 298.666667 298.666666v42.666667h-85.333333v-42.666667a213.589333 213.589333 0 0 0-213.333334-213.333333h-170.666666a213.589333 213.589333 0 0 0-213.333334 213.333333v42.666667z m298.666667-384a213.333333 213.333333 0 1 1 0-426.666667 213.333333 213.333333 0 0 1 0 426.666667z m0-341.333333a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" p-id="878"></path></svg> `)



</script>

<style scoped>
</style>
