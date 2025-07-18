<template>
  <div>
    <ZbSearchForm
        :searchList="searchList"
        :searchParam="searchParam"
        @search="search"
        @reset="reset"
        ref="searchForm"
        :searchBtnTxt="'查看'"
        :formStyleObject="'padding-left:0px;padding-right:0px'"
        :buttonStyleObject="'margin:0px;margin-bottom:10px'"
    >
      <!-- 测试添加功能按钮 -->
      <template #funcButton>
        <el-button>你好</el-button>
      </template>  
    </ZbSearchForm>  

  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { SearchItem } from "zb-vue3-ui"
import autocomponent from './autocomponent.vue'

const SearchList = [
    {
        label: 'ID',
        prop: 'id',
        type: 'el-input',
        placeholder: '请输入'
    },
    {
        label: '名称',
        prop: 'name',
        type: 'el-input',
        placeholder: '请输入'
    },
    {
        label: '分类',
        prop: 'type',
        type: 'el-select',
        placeholder: '请选择',
        options:[],
        filterable: true,
        filterKey: ['label', 'value'],
    },
    {
        label:'自定义',
        prop:'autoValue',
        type:'autocomponent',
        component:autocomponent,
    }     
]

const SearchParam = {
    id: '',
    name: '',
    type: '',
    autoValue:''    
}


const searchList = ref<SearchItem[]>(SearchList)
const searchParam:any = ref(SearchParam)

function search(){
  console.log('search')
}

function reset(){
  searchParam.value = {
    id: '',
    name: '',
    type: '',
    autoValue:''       
  }
}




</script>

<style scoped>
</style>
