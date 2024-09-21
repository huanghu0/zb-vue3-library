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

    <ZbListTable
        :tableList="tableList"
        :tableData="tableData"
        :tableOption="tableOption"
        :pageOption="pageOption"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
        @handleSelectionChange="handleSelectionChange"
        ref="listTable"
        :styleObject="'padding:0;margin-top:10px'"
        :tableKey="tableKey"
        :showHeader="true"
        :loading="loading"
    >
        <template #operate="{ data }">
            <el-link :underline="false" type="primary" style="margin-right: 5px" @click="openDetailDataSet(data.id)">详情</el-link>
        </template>
    </ZbListTable>     

  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
// import { ListTable,SearchForm } from "zb-vue3-ui"
import type { SearchItem,PageOptionItem,ColumnItem } from "zb-vue3-ui"
import { SearchList, SearchParam, PageOption, TableList } from './config/index'
import { getUuid } from './utils/index'



const searchList = ref<SearchItem[]>(SearchList)
const searchParam:any = ref(SearchParam)

const pageOption = ref<PageOptionItem>(PageOption)

const tableList = ref<ColumnItem[]>(TableList)

const tableData = ref([{}])

// 表格组件相关
const tableOption = reactive({
    index: false,
    operateWidth: '100px',
    hasPagination: true,
    multiple: true,
    fixed: 'right',
    rowKey: 'id', // 行数据的 Key，用来优化 Table 的渲染；
    reserveSelection: true, // 多选是否保留当前的选中项
    border:true,
    headerCellStyle:{
      background: '#EAEAEA',
      color: 'rgba(13, 13, 13, 1)'
    }
})

const loading = ref(false)

const tableKey = ref(getUuid())

</script>

<style scoped>
</style>
