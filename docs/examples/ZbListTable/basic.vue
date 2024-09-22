<template>
  <div>
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
            <el-link :underline="false" type="primary" style="margin-right: 5px" @click="openDetailDataSet(data)">详情</el-link>
        </template>
    </ZbListTable>     

  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { PageOptionItem,ColumnItem } from "zb-vue3-ui"
// getUUid
function getUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

const PageOption = {
    total: 0,
    pageSize: 10,
    pageNo: 1
}

const TableList = [
    {
        label: 'ID',
        prop: 'id',
        // minWidth: '20px'
    },
    {
        label: '数据集名称',
        prop: 'dataSetName',
        // minWidth: '100px',
    },
    {
        label: '分类',
        prop: 'type',
        // minWidth: '80px'
    },
    {
        label: '说明',
        prop: 'description',
        // minWidth: '200px'
    },
    {
        label: '负责人',
        prop: 'owner',
        // minWidth: '100px',
    }
]


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

function openDetailDataSet(data:any) {
    console.log(data)
}

function handleSizeChange(val:any){
    console.log(val)
}

function handleCurrentChange(val:any){
    console.log(val)
}

function handleSelectionChange(val:any){
    console.log(val)
}

</script>

<style scoped>
</style>
