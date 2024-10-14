import { ObjectType } from '../../types/ObjectType';
import { OptionItem, SearchItem } from '../../types/itemInterface';
interface Props {
    searchList: SearchItem[];
    searchParam: ObjectType;
    formStyleObject?: string;
    buttonStyleObject?: string;
    searchFormRule?: any;
    canReset?: boolean;
    showAll?: boolean;
    searchBtnTxt?: string;
}
declare function submit(): Promise<boolean | undefined>;
declare function __VLS_template(): {
    slots: {
        funcButton?(_: {}): any;
    };
    refs: {
        SearchForm: ({
            $: import('vue').ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly inline: boolean;
                readonly disabled: boolean;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
                readonly inlineMessage: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
                readonly labelSuffix: string;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly statusIcon: boolean;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
            }> & Omit<{
                readonly disabled: boolean;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "right" | "left", unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "right" | "left", unknown>;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelSuffix: string;
                readonly inline: boolean;
                readonly inlineMessage: boolean;
                readonly statusIcon: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
                readonly size?: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", unknown> | undefined;
                readonly model?: Record<string, any> | undefined;
                readonly rules?: Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>> | undefined;
                readonly scrollIntoViewOptions?: import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown> | undefined;
                onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
            } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<import('vue').ExtractPropTypes<{
                readonly model: ObjectConstructor;
                readonly rules: {
                    readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
                readonly labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelSuffix: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly inline: BooleanConstructor;
                readonly inlineMessage: BooleanConstructor;
                readonly statusIcon: BooleanConstructor;
                readonly showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideRequiredAsterisk: BooleanConstructor;
                readonly scrollToError: BooleanConstructor;
                readonly scrollIntoViewOptions: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
            }>> & {
                onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
            }, "disabled" | "labelPosition" | "requireAsteriskPosition" | "labelWidth" | "labelSuffix" | "inline" | "inlineMessage" | "statusIcon" | "showMessage" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import('vue').Slot<any> | undefined;
            }>;
            $root: import('vue').ComponentPublicInstance | null;
            $parent: import('vue').ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "validate", prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => void;
            $el: any;
            $options: import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
                readonly model: ObjectConstructor;
                readonly rules: {
                    readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
                readonly labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelSuffix: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly inline: BooleanConstructor;
                readonly inlineMessage: BooleanConstructor;
                readonly statusIcon: BooleanConstructor;
                readonly showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly hideRequiredAsterisk: BooleanConstructor;
                readonly scrollToError: BooleanConstructor;
                readonly scrollIntoViewOptions: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly size: {
                    readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly disabled: BooleanConstructor;
            }>> & {
                onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
            }, {
                validate: (callback?: import('element-plus').FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
                validateField: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined, callback?: import('element-plus').FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
                resetFields: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
                clearValidate: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
                scrollToField: (prop: import('element-plus').FormItemProp) => void;
                fields: import('element-plus').FormItemContext[];
            }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
                validate: (prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => void;
            }, string, {
                readonly inline: boolean;
                readonly disabled: boolean;
                readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
                readonly inlineMessage: boolean;
                readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
                readonly labelSuffix: string;
                readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly statusIcon: boolean;
                readonly hideRequiredAsterisk: boolean;
                readonly scrollToError: boolean;
            }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import('vue').nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
        } & Readonly<{
            readonly inline: boolean;
            readonly disabled: boolean;
            readonly labelWidth: import('element-plus/es/utils').EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "top" | "left" | "right", unknown>;
            readonly inlineMessage: boolean;
            readonly showMessage: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropMergeType<StringConstructor, "left" | "right", unknown>;
            readonly labelSuffix: string;
            readonly validateOnRuleChange: import('element-plus/es/utils').EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly statusIcon: boolean;
            readonly hideRequiredAsterisk: boolean;
            readonly scrollToError: boolean;
        }> & Omit<Readonly<import('vue').ExtractPropTypes<{
            readonly model: ObjectConstructor;
            readonly rules: {
                readonly type: import('vue').PropType<Partial<Record<string, import('element-plus/es/utils').Arrayable<import('element-plus').FormItemRule>>>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly labelPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "top" | "left" | "right", unknown, "right", boolean>;
            readonly requireAsteriskPosition: import('element-plus/es/utils').EpPropFinalized<StringConstructor, "left" | "right", unknown, "left", boolean>;
            readonly labelWidth: import('element-plus/es/utils').EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelSuffix: import('element-plus/es/utils').EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly inline: BooleanConstructor;
            readonly inlineMessage: BooleanConstructor;
            readonly statusIcon: BooleanConstructor;
            readonly showMessage: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly validateOnRuleChange: import('element-plus/es/utils').EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly hideRequiredAsterisk: BooleanConstructor;
            readonly scrollToError: BooleanConstructor;
            readonly scrollIntoViewOptions: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly size: {
                readonly type: import('vue').PropType<import('element-plus/es/utils').EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabled: BooleanConstructor;
        }>> & {
            onValidate?: ((prop: import('element-plus').FormItemProp, isValid: boolean, message: string) => any) | undefined;
        }, "disabled" | "labelPosition" | "requireAsteriskPosition" | "labelWidth" | "labelSuffix" | "inline" | "inlineMessage" | "statusIcon" | "showMessage" | "validateOnRuleChange" | "hideRequiredAsterisk" | "scrollToError" | "validate" | "validateField" | "resetFields" | "clearValidate" | "scrollToField" | "fields"> & import('vue').ShallowUnwrapRef<{
            validate: (callback?: import('element-plus').FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
            validateField: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined, callback?: import('element-plus').FormValidateCallback | undefined) => import('element-plus').FormValidationResult;
            resetFields: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
            clearValidate: (props?: import('element-plus/es/utils').Arrayable<import('element-plus').FormItemProp> | undefined) => void;
            scrollToField: (prop: import('element-plus').FormItemProp) => void;
            fields: import('element-plus').FormItemContext[];
        }> & {} & import('vue').ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {}): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    resetOptions: (index: number, options: Array<OptionItem>) => void;
    submit: typeof submit;
    clearValidate: (data?: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: (...args: any[]) => void;
    search: (...args: any[]) => void;
    changeVal: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onReset?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onChangeVal?: ((...args: any[]) => any) | undefined;
}>, {
    searchList: SearchItem[];
    searchParam: ObjectType;
    searchFormRule: any;
    canReset: boolean;
    showAll: boolean;
    searchBtnTxt: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
