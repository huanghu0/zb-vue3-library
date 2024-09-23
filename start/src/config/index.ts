export const SearchList = [
    {
        label: 'ID',
        prop: 'id',
        type: 'el-input',
        placeholder: '请输入'
    },
    {
        label: '数据集名称',
        prop: 'dataSetName',
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
    }
]

export const SearchParam = {
    id: '',
    dataSetName: '',
    type: ''
}

export const PageOption = {
    total: 0,
    pageSize: 10,
    pageNo: 1,
    pageSizes:[10,100,1000]
}

export const TableList = [
    {
        label: 'ID',
        prop: 'id',
        minWidth: '80px'
    },
    {
        label: '数据集名称',
        prop: 'dataSetName',
        minWidth: '100px',
    },
    {
        label: '分类',
        prop: 'type',
        minWidth: '80px'
    },
    {
        label: '说明',
        prop: 'description',
        minWidth: '200px'
    },
    {
        label: '负责人',
        prop: 'owner',
        minWidth: '100px',
    }
]
