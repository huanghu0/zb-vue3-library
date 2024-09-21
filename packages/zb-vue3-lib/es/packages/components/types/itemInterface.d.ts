export interface OptionItem {
    label: string | number | boolean | null | undefined;
    value: string | number | boolean | null | undefined;
    [propName: string]: any;
}
export interface ColumnItem {
    label: string;
    prop: string;
    width?: string | number;
    minWidth?: string | number;
    tooltip?: boolean;
    designTooltipContentInFormat?: any;
    alignRight?: boolean;
    fixed?: boolean;
    format?: any;
    headerToolTip?: string;
    method?: Function;
    disabledTootip?: Function;
    vueComponent?: any;
    slot?: boolean;
    sortable?: boolean | string;
}
export interface SearchItem {
    label: string;
    prop: string;
    multiple?: boolean;
    type: string;
    options?: Array<OptionItem>;
    defaultOptions?: Array<OptionItem>;
    required?: boolean;
    placeholder?: string;
    width?: string;
    filterable?: boolean;
    filterKey?: string[];
    extraHeight?: boolean;
    remoteMethod?: any;
    defaultData?: any;
    isShow?: any;
    isShowFunc?: Function;
    shortcuts?: any;
    dataType?: any;
    tooltip?: string;
    enterKeyEvent?: boolean;
    notTrim?: boolean;
    checkStrictly?: boolean;
    showAllLevels?: boolean;
    class?: string;
    filterMethod?: any;
    clearable?: boolean;
    format?: string;
    valueFormat?: string;
}
export interface PageOptionItem {
    total: number;
    pageSize: number;
    pageNo: number;
}
export interface Ifn {
    (row: any): any;
}
export interface TableOption {
    multiple?: boolean;
    index?: boolean;
    operateWidth?: string;
    hasPagination?: boolean;
    maxHeight?: number;
    extraHeight?: number;
    fixed?: string | boolean;
    headerCellStyle?: any;
    rowKey?: number | string;
    reserveSelection?: boolean;
    border?: boolean;
}
