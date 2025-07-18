import autocomponent from '../autocomponent.vue'
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
    },
    {
        label:'自定义',
        prop:'autoValue',
        type:'autocomponent',
        component:autocomponent,
    }    
]

export const SearchParam = {
    id: '',
    dataSetName: '',
    type: '',
    autoValue:''
}

export const PageOption = {
    total: 0,
    pageSize: 10,
    pageNo: 1,
    pageSizes:[10,100,1000],
    layout:'total, prev, pager, next,sizes',
    paginationContainerStyle:{
        'margin-top': '15px',
        'display': 'flex',
        'justify-content': 'center'
    }      
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
