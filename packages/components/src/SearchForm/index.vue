<template>
    <div :class="['search-box', showMore ? '' : 'two-row', showAll ? 'showAll' : '']">
        <el-form inline :model="searchParam" class="search-form" ref="SearchForm" :style="props.formStyleObject" :rules="searchFormRule" :key="tableKey">
            <el-form-item v-for="(item, index) in searchList" :key="index" :prop="item.prop">
                <template #label>
                    <div v-if="item['isShowFunc'] ? item['isShowFunc'](searchParam) : item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true" class="flex">
                        {{ item.label }}
                        <el-tooltip placement="top" :hide-after="300" v-if="item.tooltip ? true : false">
                            <template #content>
                                <div v-html="item.tooltip"></div>
                            </template>
                            <el-icon style="font-size: 12px; margin-left: 5px">
                                <QuestionFilled />
                            </el-icon>
                        </el-tooltip>
                    </div>
                </template>
                <template
                    v-if="item.type === 'el-select' && (item['isShowFunc'] ? item['isShowFunc'](searchParam) : item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)"
                >
                    <el-tooltip
                        placement="top"
                        :hide-after="300"
                        :content="item.options?.find(option => option?.value == searchParam[item.prop])?.label?.toString?.() ?? ''"
                        v-if="item.type === 'el-select' && (item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)"
                        :disabled="Boolean(item.multiple) || !((item.options?.find(option => option?.value == searchParam[item.prop])?.label?.toString?.()?.length ?? 0) > 9)"
                    >
                        <el-select
                            v-model="searchParam[item.prop]"
                            :clearable="item.clearable ?? true"
                            :popper-class="item.extraHeight ? 'extraHeight' : ''"
                            :placeholder="item.placeholder"
                            :style="item.width ? `width:${item.width}` : ''"
                            :multiple="item.multiple"
                            :remote="item.filterable"
                            :filterable="item.filterable"
                            :remote-method="query => remoteMethod(query, item)"
                            value-key="id"
                            :collapse-tags="item.multiple"
                            :collapse-tags-tooltip="item.multiple"
                            @change="val => changeVal(val, item)"
                        >
                            <el-option v-for="option in item.options" :key="option.value" :value="option.value" :label="option.label" :style="option.styleObject">
                                <div v-html="option.showLabel" v-if="option.showLabel"></div>
                                <div v-if="option.isEmphasize">
                                    <div class="basic-flex-center">
                                        <div>{{ option.label }}</div>
                                        <div class="basic-emphasize-tag">重要</div>
                                    </div>
                                </div>
                            </el-option>
                        </el-select>
                    </el-tooltip>
                </template>
                <template
                    v-if="item.type === 'el-input' && (item['isShowFunc'] ? item['isShowFunc'](searchParam) : item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)"
                >
                    <el-tooltip
                        placement="top"
                        :hide-after="300"
                        :content="searchParam[item.prop]?.toString?.() ?? ''"
                        v-if="item.type === 'el-input' && (item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)"
                        :disabled="!((searchParam[item.prop]?.toString?.()?.length ?? 0) > 9)"
                    >
                        <el-input v-if="item.notTrim" v-model="searchParam[item.prop]" clearable :placeholder="item.placeholder" :style="item.width ? `width:${item.width}` : ''"></el-input>
                        <el-input v-else v-model.trim="searchParam[item.prop]" clearable :placeholder="item.placeholder" :style="item.width ? `width:${item.width}` : ''"></el-input>
                    </el-tooltip>
                </template>
                <template
                    v-if="
                        item.type === 'el-date-picker' && (item['isShowFunc'] ? item['isShowFunc'](searchParam) : item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)
                    "
                >
                    <el-date-picker
                        v-model.trim="searchParam[item.prop]"
                        :type="item.dataType ?? 'datetimerange'"
                        range-separator="-"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        style="height: 32px"
                        :shortcuts="item.shortcuts"
                        :format="item.format ?? 'yyyy-MM-dd'"
                        :value-format="item.valueFormat ?? 'yyyy-MM-dd'"
                    />
                </template>
                <template v-if="item.type === 'el-cascader' && (item['isShow'] ? item['isShow'][1]?.includes(searchParam[item['isShow'][0]]) : true)">
                    <el-cascader
                        :placeholder="item.placeholder"
                        :options="item.options"
                        :props="{
                            ...item.cascaderProps,
                        }"
                        :filterable="item.filterable"
                        :style="{ width: item.width ? item.width : '200px' }"
                        clearable
                        :show-all-levels="item.showAllLevels"
                        collapse-tags
                        :popper-class="item.class"
                        :filter-method="item.filterMethod"
                        v-model="searchParam[item.prop]"
                    ></el-cascader>
                </template>
            </el-form-item>
        </el-form>
    </div>
    <div class="search-button" :style="buttonStyleObject">
        <el-button type="primary" @click="search">{{ searchBtnTxt }}</el-button>
        <el-button v-if="canReset" @click="reset">重置</el-button>
        <slot name="funcButton"></slot>
        <el-button v-if="showMoreButton" @click="showMore = !showMore" :icon="showMore ? CaretTop : CaretBottom">
            {{ showMore ? '收起' : '展开' }}
        </el-button>
    </div>
</template>

<script name="ZbSearchForm" lang="ts" setup>
import { cloneDeep } from 'lodash'
import type { ObjectType } from '../../types/ObjectType'
import type { OptionItem, SearchItem } from '../../types/itemInterface'
import type { FormInstance } from 'element-plus'
import { onMounted, onUnmounted, onUpdated, ref, watch } from 'vue'
import { QuestionFilled,CaretTop,CaretBottom } from '@element-plus/icons-vue'
import { ElButton,ElForm,ElFormItem,ElTooltip,ElIcon,ElSelect,ElOption,ElInput,ElDatePicker,ElCascader } from 'element-plus';



const emit = defineEmits(['search', 'reset', 'changeVal'])
const showMore = ref(false)
const showMoreButton = ref(false)
const SearchForm = ref<FormInstance>()
let setTimeOutEvent: any = null
const validateStatus = ref(true)
const tableKey = ref(false)

interface Props {
    searchList: SearchItem[]
    searchParam: ObjectType
    formStyleObject?: string
    buttonStyleObject?: string
    searchFormRule?: any
    canReset?: boolean
    showAll?: boolean
    searchBtnTxt?:string
}

const props = withDefaults(defineProps<Props>(), {
    searchList: () => [],
    searchParam: () => ({}),
    searchFormRule: [],
    canReset: true,
    showAll: false,
    searchBtnTxt:'搜索'
})

const searchList = ref(props.searchList)

watch(
    () => props.searchList,
    () => {
        searchList.value = props.searchList
    },
    {
        deep: true
    }
)

// 回调搜索事件
const search = async () => {
    await submit()
    validateStatus.value && emit('search', props.searchParam)
}

// 回调重置事件
const reset = () => {
    SearchForm.value?.clearValidate()
    tableKey.value = !tableKey.value
    emit('reset')
}

// 回调change事件
const changeVal = (val: string = '', item: SearchItem) => {
    ifShowButton()
    emit('changeVal', val, item)
}

const resizeObserver: any = new ResizeObserver(() => {
    ifShowButton()
})

onMounted(() => {
    searchList.value.forEach(item => {
        if (item.filterable) {
            item.defaultOptions = cloneDeep(item.options)
            remoteMethod('', item)
        }
    })
    ifShowButton()
    window.addEventListener('resize', ifShowButton, { passive: true })
    try {
        resizeObserver.observe(SearchForm.value?.$el)
    } catch (error) {}
})

onUpdated(() => {
    ifShowButton()
})

onUnmounted(() => {
    window.removeEventListener('resize', ifShowButton)
    try {
        resizeObserver.unobserve(SearchForm.value?.$el)
    } catch (error) {}
})

// 异步获取options且filterable的下拉框，需要重新初始化一下下拉选项
const resetOptions = (index: number, options: Array<OptionItem>) => {
    searchList.value[index].defaultOptions = cloneDeep(options)
    remoteMethod('', searchList.value[index])
}

const remoteMethod = (query: string, item: SearchItem) => {
    if (query) {
        let queryLowerCase = query.toLowerCase()
        let filterKey: string[] = item?.filterKey ?? ['label']
        item.options = []
        for (let i = 0; i < item.defaultOptions!.length; i++) {
            let result = filterKey.some(key => {
                if (item.defaultOptions![i][key] && (item.defaultOptions![i][key]?.toString() as string).toLowerCase().includes(queryLowerCase)) return true
            })
            if (result) {
                item.options!.push(item.defaultOptions![i])
            }
        }
    } else {
        item.options = item?.defaultOptions?.slice(0)
    }
}
// 是否展示更多按钮事件
const ifShowButton = (_: any = null) => {
    if (setTimeOutEvent) clearTimeout(setTimeOutEvent)
    setTimeOutEvent = setTimeout(() => {
        let dom = SearchForm.value
        if (dom) {
            if (dom.$el.offsetHeight > 118) {
                if (!showMoreButton.value) showMore.value = false
                showMoreButton.value = true
            }
            if (dom.$el.offsetHeight <= 118) {
                if (showMoreButton.value) showMore.value = false
                showMoreButton.value = false
            }
        }
    }, 300)
}

async function submit() {
    return await SearchForm.value?.validate(async (valid: any) => {
        if (valid) {
            validateStatus.value = true
            return true
        } else {
            validateStatus.value = false
            return false
        }
    })
}

const clearValidate = (data?: any) => {
    SearchForm.value?.clearValidate(data)
}

defineExpose({
    resetOptions,
    submit,
    clearValidate
})
</script>

<style scoped lang="scss">
.search-box.two-row {
    max-height: 110px;
    overflow: hidden;
}
.search-box.showAll {
    max-height: 1000px;
}

.search-form {
    padding: 10px 20px 0 20px;

    &:deep(.el-form-item) {
        margin-right: 10px;
        margin-bottom: 10px;
        align-items: center;
    }

    &:deep(.el-select) {
        width: 200px;

        .el-input {
            width: 100%;
        }
    }

    &:deep(.el-input) {
        width: 100%;
    }

    &:deep(.el-form-item__error) {
        padding-top: 3px;
    }
}

.search-button {
    text-align: right;
    border-bottom: 1px solid rgb(230, 230, 230);
    padding-bottom: 10px;
    padding-right: 10px;
    margin: 0 20px;
}

.select-multiple-3 {
    height: 100%;
    width: 100%;
    padding: 0px !important;
    margin-right: 14px;

    :deep(.el-input) {
        display: inline-block !important;
        max-height: 73px;
        height: 100%;
    }

    :deep(.el-input__inner) {
        min-height: 30px;
    }

    :deep(.select-trigger) {
        display: flex;
        justify-content: flex-start;
    }

    :deep(.el-input__wrapper) {
        width: calc(100% - 7px) !important;
        max-height: 73px;
    }

    :deep(.select-trigger) {
        position: relative;
    }

    :deep(.el-select__tags) {
        max-height: 72px;
        overflow: auto;
        // margin-top: 1px;
        width: calc(100% - 15px) !important;
        max-width: calc(100% - 15px) !important;
    }

    :deep(.el-form-item__label) {
        height: 100% !important;
    }

    :deep(.el-input__suffix-inner) {
        padding-left: 10px;
        margin-left: 10px;
    }
}

.flex {
    display: flex;
    align-items: center;
    height: 100% !important;
}
</style>
