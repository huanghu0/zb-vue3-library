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

    <ZbSvgIcon
      size="40px"
      color="#1a9b3c"
      :iconStr="iconStr"
    >
    </ZbSvgIcon>      

    <div class="echarts-content">
      <ZbEchartsComponents :opts="barEchartsOption"></ZbEchartsComponents>
    </div>  

    <div class="panel">
      <ZbDraggablePanel :columns="columns">
        <template v-for="item in columns" :key="item.id" #[item.id]>
          <div>
            {{ item.text }}
          </div>
        </template>
      </ZbDraggablePanel>
    </div>

  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
// import { ListTable,SearchForm } from "zb-vue3-ui"
import type { SearchItem,PageOptionItem,ColumnItem } from "zb-vue3-ui"
import { SearchList, SearchParam, PageOption, TableList } from './config/index'
import { getUuid } from './utils/index'

const iconStr = ref(`<svg t="1727680486563" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="877" width="40" height="40"><path d="M213.333333 896H128v-42.666667a299.008 299.008 0 0 1 298.666667-298.666666h170.666666a299.008 299.008 0 0 1 298.666667 298.666666v42.666667h-85.333333v-42.666667a213.589333 213.589333 0 0 0-213.333334-213.333333h-170.666666a213.589333 213.589333 0 0 0-213.333334 213.333333v42.666667z m298.666667-384a213.333333 213.333333 0 1 1 0-426.666667 213.333333 213.333333 0 0 1 0 426.666667z m0-341.333333a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" p-id="878"></path></svg> `)

const searchList = ref<SearchItem[]>(SearchList)
const searchParam:any = ref(SearchParam)

const pageOption = ref<PageOptionItem>(PageOption)

const tableList = ref<ColumnItem[]>(TableList)

const tableData = ref([{}])

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

// 表格组件相关
const tableOption = reactive({
    index: true,
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
    },
    indexLabel:'序号',
    indexWidth:'80px',
    indexMethod:indexMethod
})

function indexMethod(index:number){
  console.log(index,'index------------------')
  return index
}

const loading = ref(false)

const tableKey = ref(getUuid())

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
.echarts-content{
  width: 600px;
  height: 600px;
}
.panel{
  height: 600px;
  width: 100%;
}
</style>
