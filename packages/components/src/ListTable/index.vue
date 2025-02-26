<template>
    <div class="list-table" :style="props.styleObject">
        <el-table
            :data="tableDataList"
            style="width: 100%"
            :header-cell-style="props.tableOption?.headerCellStyle ?? { color: '#555' }"
            :max-height="maxHeight"
            ref="tableRef"
            @selection-change="handleSelectionChange"
            @sort-change="handleSortChange"
            :key="tableKey"
            :show-header="props.showHeader"
            v-loading="loading"
            :row-key="tableOption.rowKey"
            :border="tableOption.border"
        >
            <el-table-column type="selection" width="60" v-if="tableOption.multiple" :reserve-selection="tableOption.reserveSelection" :fixed="true" />
            <el-table-column type="index" :width="tableOption.indexWidth" v-if="tableOption.index" :label="tableOption.indexLabel" :fixed="true" :index="tableOption.indexMethod ? tableOption.indexMethod : ''" />
            <el-table-column
                v-for="item in tableList"
                :key="item.prop"
                :label="item.label"
                :prop="item.prop"
                :width="item.width"
                :min-width="item.minWidth"
                :align="item.alignRight ? 'right' : 'left'"
                :show-overflow-tooltip="item.tooltip"
                :fixed="item.fixed"
                :sortable="item.sortable ?? false"
            >
                <template #header v-if="item.headerToolTip">
                    {{ item.label }}
                    <el-tooltip placement="top">
                        <template #content>
                            <div v-html="item.headerToolTip"></div>
                        </template>
                        <el-icon size="14">
                            <QuestionFilled />
                        </el-icon>
                    </el-tooltip>
                </template>
                <template #default="scope" v-if="item.format">
                    <span v-html="formatValue(item.format, scope.row)" v-if="!item.designTooltipContentInFormat" @click="item.method ? item.method(scope.row) : ''"></span>
                    <el-tooltip placement="top" v-else :disabled="item.disabledTootip && item.disabledTootip(scope.row)">
                        <template #content>
                            <div v-html="item.designTooltipContentInFormat"></div>
                        </template>
                        <span v-html="formatValue(item.format, scope.row)" @click="item.method ? item.method(scope.row) : ''"></span>
                    </el-tooltip>
                </template>
                <template #default="scope" v-if="item.vueComponent">
                    <component :is="item.vueComponent" :data="scope.row" :field="scope.column" :index="scope.$index"></component>
                </template>
                <template #default="scope" v-if="item.slot">
                    <slot name="slot" :data="scope.row" :field="scope.column" :index="scope.$index"></slot>
                </template>
            </el-table-column>
            <el-table-column label="操作" v-if="tableOption.operateWidth" :width="tableOption.operateWidth" :fixed="tableOption.fixed">
                <template #default="scope">
                    <slot name="operate" :data="scope.row" :field="scope.column" :index="scope.$index"></slot>
                </template>
            </el-table-column>
        </el-table>
        <div :style="pageOption.paginationContainerStyle">
            <el-pagination
                v-if="tableOption.hasPagination"
                v-model:current-page="pageOption.pageNo"
                v-model:page-size="pageOption.pageSize"
                :page-sizes="pageOption.pageSizes"
                background
                :layout="pageOption.layout"
                :total="pageOption.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            ></el-pagination>            
        </div>
    </div>
</template>

<script name="ZbListTable" lang="ts" setup>
import { nextTick, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'
import type { ObjectType } from '../../types/ObjectType'
import type { ColumnItem, Ifn,TableOption,PageOptionItem } from '../../types/itemInterface'
import { QuestionFilled } from '@element-plus/icons-vue'
import { ElTable,ElTableColumn,ElIcon,ElPagination } from 'element-plus'

const emit = defineEmits(['handleSizeChange', 'handleCurrentChange', 'handleSelectionChange', 'handleSortChange'])

const tableRef = ref<ObjectType>()
const maxHeight = ref(500)
const tableDataList: any = ref([])


interface Props {
    tableOption: TableOption // 列表配置
    tableData: ObjectType[] // 列表数据
    tableList: ColumnItem[] // 列表展示内容
    pageOption: PageOptionItem// 翻页配置
    styleObject?: string //自定义样式
    tableKey?: any // 解决table数据缓存问题
    showHeader?: boolean
    loading?: boolean
}

onMounted(() => {
    computedMaxHeight()
    window.addEventListener('resize', computedMaxHeight, { passive: true })
})

onUpdated(() => {
    computedMaxHeight()
})

onUnmounted(() => {
    window.removeEventListener('resize', computedMaxHeight)
})

const props = withDefaults(defineProps<Props>(), {
    tableData: () => [],
    tableList: () => [],
    tableOption: () => ({
        multiple: false,
        index: true,
        hasPagination: false,
        extraHeight: 0,
        headerCellStyle: { color: '#555' }
    }),
    pageOption: () => ({
        total: 0,
        pageSize: 20,
        pageNo: 1,
        pageSizes:[10, 20, 30, 50, 100],
        layout:'total, sizes, prev, pager, next, jumper',
        paginationContainerStyle:''
    }),
    tableKey: true,
    showHeader: true,
    loading: false
})

const formatValue = (format: Ifn, row: ObjectType) => {
    return format(row)
}
// 计算高度
const computedMaxHeight = () => {
    let computedHeight = 0
    if (props?.tableOption?.maxHeight) {
        computedHeight = props?.tableOption?.maxHeight
    } else {
        computedHeight = window.innerHeight - (props.tableOption.hasPagination ? 147 : 80) - (props.tableOption?.extraHeight ?? 0)
        computedHeight = Math.max(computedHeight, 300)
    }
    maxHeight.value = computedHeight
}
// 页码数change事件
const handleSizeChange = (val: number) => {
    emit('handleSizeChange', val)
}
// 翻页事件
const handleCurrentChange = (val: number) => {
    emit('handleCurrentChange', val)
}
// 表格勾选事件
const handleSelectionChange = (val: ObjectType[]) => {
    emit('handleSelectionChange', val)
}

// 表格排序时间
const handleSortChange = (val: any) => {
    emit('handleSortChange', val)
}
// 手动勾选表格
const toggleRowSelection = (row: ObjectType) => {
    ;(tableRef.value as any).toggleRowSelection(row, true)
}
// 清理表格勾选
const clearSelection = () => {
    ;(tableRef.value as any).clearSelection()
}

watch(
    () => props.tableData,
    async (newData: any, oldData: any) => {
        // 整个表格数据的替换需要先清除，否则会有浏览器缓存问题
        if (oldData == newData) {
            tableDataList.value = props.tableData
            return
        }
        tableDataList.value = []
        await nextTick()
        tableDataList.value = props.tableData
    },
    {
        immediate: true,
        deep: true
    }
)

defineExpose({
    toggleRowSelection,
    clearSelection
})
</script>

<style scoped lang="scss">
.list-table {
    padding: 0 20px;

    &:deep(.el-link__inner) {
        font-size: 12px;
    }

    &:deep(.el-pagination) {
        padding: 15px 5px 30px 5px !important;
    }
}
</style>
