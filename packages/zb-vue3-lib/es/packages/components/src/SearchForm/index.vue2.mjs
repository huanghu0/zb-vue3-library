import { defineComponent as ae, ref as v, watch as ce, onMounted as pe, onUpdated as he, onUnmounted as fe, openBlock as o, createElementBlock as c, Fragment as k, createElementVNode as b, normalizeClass as ie, createBlock as t, unref as s, normalizeStyle as y, withCtx as u, renderList as x, createTextVNode as L, toDisplayString as O, createVNode as C, createCommentVNode as n, resolveDynamicComponent as ye, renderSlot as we } from "vue";
import { l as ee } from "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { QuestionFilled as ve, CaretTop as be, CaretBottom as Se } from "../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.6_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs";
import { ElForm as Pe, ElFormItem as Ve, ElTooltip as j, ElIcon as ge, ElSelect as ke, ElOption as me, ElInput as le, ElDatePicker as Ee, ElCascader as Fe, ElButton as D } from "element-plus";
const Le = {
  key: 0,
  class: "flex"
}, Oe = ["innerHTML"], Ce = ["innerHTML"], Me = { key: 1 }, Te = { class: "basic-flex-center" }, Be = ae({
  name: "ZbSearchForm"
}), De = /* @__PURE__ */ ae({
  ...Be,
  props: {
    searchList: { default: () => [] },
    searchParam: { default: () => ({}) },
    formStyleObject: {},
    buttonStyleObject: {},
    searchFormRule: { default: [] },
    canReset: { type: Boolean, default: !0 },
    showAll: { type: Boolean, default: !1 },
    searchBtnTxt: { default: "搜索" }
  },
  emits: ["search", "reset", "changeVal"],
  setup(re, { expose: oe, emit: se }) {
    const M = se, p = v(!1), S = v(!1), h = v();
    let T = null;
    const B = v(!0), U = v(!1), P = re, V = v(P.searchList);
    ce(
      () => P.searchList,
      () => {
        V.value = P.searchList;
      },
      {
        deep: !0
      }
    );
    const te = async () => {
      await A(), B.value && M("search", P.searchParam);
    }, ue = () => {
      var l;
      (l = h.value) == null || l.clearValidate(), U.value = !U.value, M("reset");
    }, ne = (l = "", a) => {
      w(), M("changeVal", l, a);
    }, R = new ResizeObserver(() => {
      w();
    });
    pe(() => {
      var l;
      V.value.forEach((a) => {
        a.filterable && (a.defaultOptions = ee.cloneDeep(a.options), z("", a));
      }), w(), window.addEventListener("resize", w, { passive: !0 });
      try {
        R.observe((l = h.value) == null ? void 0 : l.$el);
      } catch {
      }
    }), he(() => {
      w();
    }), fe(() => {
      var l;
      window.removeEventListener("resize", w);
      try {
        R.unobserve((l = h.value) == null ? void 0 : l.$el);
      } catch {
      }
    });
    const de = (l, a) => {
      V.value[l].defaultOptions = ee.cloneDeep(a), z("", V.value[l]);
    }, z = (l, a) => {
      var e;
      if (l) {
        let $ = l.toLowerCase(), f = (a == null ? void 0 : a.filterKey) ?? ["label"];
        a.options = [];
        for (let d = 0; d < a.defaultOptions.length; d++)
          f.some((g) => {
            var i;
            if (a.defaultOptions[d][g] && ((i = a.defaultOptions[d][g]) == null ? void 0 : i.toString()).toLowerCase().includes($)) return !0;
          }) && a.options.push(a.defaultOptions[d]);
      } else
        a.options = (e = a == null ? void 0 : a.defaultOptions) == null ? void 0 : e.slice(0);
    }, w = (l = null) => {
      T && clearTimeout(T), T = setTimeout(() => {
        let a = h.value;
        a && (a.$el.offsetHeight > 118 && (S.value || (p.value = !1), S.value = !0), a.$el.offsetHeight <= 118 && (S.value && (p.value = !1), S.value = !1));
      }, 300);
    };
    async function A() {
      var l;
      return await ((l = h.value) == null ? void 0 : l.validate(async (a) => a ? (B.value = !0, !0) : (B.value = !1, !1)));
    }
    return oe({
      resetOptions: de,
      submit: A,
      clearValidate: (l) => {
        var a;
        (a = h.value) == null || a.clearValidate(l);
      }
    }), (l, a) => (o(), c(k, null, [
      b("div", {
        class: ie(["search-box", p.value ? "" : "two-row", l.showAll ? "showAll" : ""])
      }, [
        (o(), t(s(Pe), {
          inline: "",
          model: l.searchParam,
          class: "search-form",
          ref_key: "SearchForm",
          ref: h,
          style: y(P.formStyleObject),
          rules: l.searchFormRule,
          key: U.value
        }, {
          default: u(() => [
            (o(!0), c(k, null, x(V.value, (e, $) => (o(), t(s(Ve), {
              key: $,
              prop: e.prop
            }, {
              label: u(() => {
                var f;
                return [
                  (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (f = e.isShow[1]) != null && f.includes(l.searchParam[e.isShow[0]])) ? (o(), c("div", Le, [
                    L(O(e.label) + " ", 1),
                    e.tooltip ? (o(), t(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300
                    }, {
                      content: u(() => [
                        b("div", {
                          innerHTML: e.tooltip
                        }, null, 8, Oe)
                      ]),
                      default: u(() => [
                        C(s(ge), { style: { "font-size": "12px", "margin-left": "5px" } }, {
                          default: u(() => [
                            C(s(ve))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024)) : n("", !0)
                  ])) : n("", !0)
                ];
              }),
              default: u(() => {
                var f, d, H, g, i, N, I, K, m, q, Q, Z, G, E, J, F, W, X, Y, _;
                return [
                  e.type === "el-select" && (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (f = e.isShow[1]) != null && f.includes(l.searchParam[e.isShow[0]])) ? (o(), c(k, { key: 0 }, [
                    e.type === "el-select" && (!e.isShow || (d = e.isShow[1]) != null && d.includes(l.searchParam[e.isShow[0]])) ? (o(), t(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300,
                      content: ((N = (i = (g = (H = e.options) == null ? void 0 : H.find((r) => (r == null ? void 0 : r.value) == l.searchParam[e.prop])) == null ? void 0 : g.label) == null ? void 0 : i.toString) == null ? void 0 : N.call(i)) ?? "",
                      disabled: !!e.multiple || !((((Q = (q = (m = (K = (I = e.options) == null ? void 0 : I.find((r) => (r == null ? void 0 : r.value) == l.searchParam[e.prop])) == null ? void 0 : K.label) == null ? void 0 : m.toString) == null ? void 0 : q.call(m)) == null ? void 0 : Q.length) ?? 0) > 9)
                    }, {
                      default: u(() => [
                        C(s(ke), {
                          modelValue: l.searchParam[e.prop],
                          "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r,
                          clearable: e.clearable ?? !0,
                          "popper-class": e.extraHeight ? "extraHeight" : "",
                          placeholder: e.placeholder,
                          style: y(e.width ? `width:${e.width}` : ""),
                          multiple: e.multiple,
                          remote: e.filterable,
                          filterable: e.filterable,
                          "remote-method": (r) => z(r, e),
                          "value-key": "id",
                          "collapse-tags": e.multiple,
                          "collapse-tags-tooltip": e.multiple,
                          onChange: (r) => ne(r, e)
                        }, {
                          default: u(() => [
                            (o(!0), c(k, null, x(e.options, (r) => (o(), t(s(me), {
                              key: r.value,
                              value: r.value,
                              label: r.label,
                              style: y(r.styleObject)
                            }, {
                              default: u(() => [
                                r.showLabel ? (o(), c("div", {
                                  key: 0,
                                  innerHTML: r.showLabel
                                }, null, 8, Ce)) : n("", !0),
                                r.isEmphasize ? (o(), c("div", Me, [
                                  b("div", Te, [
                                    b("div", null, O(r.label), 1),
                                    a[1] || (a[1] = b("div", { class: "basic-emphasize-tag" }, "重要", -1))
                                  ])
                                ])) : n("", !0)
                              ]),
                              _: 2
                            }, 1032, ["value", "label", "style"]))), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue", "clearable", "popper-class", "placeholder", "style", "multiple", "remote", "filterable", "remote-method", "collapse-tags", "collapse-tags-tooltip", "onChange"])
                      ]),
                      _: 2
                    }, 1032, ["content", "disabled"])) : n("", !0)
                  ], 64)) : n("", !0),
                  e.type === "el-input" && (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (Z = e.isShow[1]) != null && Z.includes(l.searchParam[e.isShow[0]])) ? (o(), c(k, { key: 1 }, [
                    e.type === "el-input" && (!e.isShow || (G = e.isShow[1]) != null && G.includes(l.searchParam[e.isShow[0]])) ? (o(), t(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300,
                      content: ((J = (E = l.searchParam[e.prop]) == null ? void 0 : E.toString) == null ? void 0 : J.call(E)) ?? "",
                      disabled: !((((X = (W = (F = l.searchParam[e.prop]) == null ? void 0 : F.toString) == null ? void 0 : W.call(F)) == null ? void 0 : X.length) ?? 0) > 9)
                    }, {
                      default: u(() => [
                        e.notTrim ? (o(), t(s(le), {
                          key: 0,
                          modelValue: l.searchParam[e.prop],
                          "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r,
                          clearable: "",
                          placeholder: e.placeholder,
                          style: y(e.width ? `width:${e.width}` : "")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : (o(), t(s(le), {
                          key: 1,
                          modelValue: l.searchParam[e.prop],
                          "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r,
                          modelModifiers: { trim: !0 },
                          clearable: "",
                          placeholder: e.placeholder,
                          style: y(e.width ? `width:${e.width}` : "")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"]))
                      ]),
                      _: 2
                    }, 1032, ["content", "disabled"])) : n("", !0)
                  ], 64)) : n("", !0),
                  e.type === "el-date-picker" && (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (Y = e.isShow[1]) != null && Y.includes(l.searchParam[e.isShow[0]])) ? (o(), t(s(Ee), {
                    key: 2,
                    modelValue: l.searchParam[e.prop],
                    "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r,
                    modelModifiers: { trim: !0 },
                    type: e.dataType ?? "datetimerange",
                    "range-separator": "-",
                    "start-placeholder": "开始时间",
                    "end-placeholder": "结束时间",
                    style: { height: "32px" },
                    shortcuts: e.shortcuts,
                    format: e.format ?? "yyyy-MM-dd",
                    "value-format": e.valueFormat ?? "yyyy-MM-dd"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "shortcuts", "format", "value-format"])) : n("", !0),
                  e.type === "el-cascader" && (!e.isShow || (_ = e.isShow[1]) != null && _.includes(l.searchParam[e.isShow[0]])) ? (o(), t(s(Fe), {
                    key: 3,
                    placeholder: e.placeholder,
                    options: e.options,
                    props: {
                      ...e.cascaderProps
                    },
                    filterable: e.filterable,
                    style: y({ width: e.width ? e.width : "200px" }),
                    clearable: "",
                    "show-all-levels": e.showAllLevels,
                    "collapse-tags": "",
                    "popper-class": e.class,
                    "filter-method": e.filterMethod,
                    modelValue: l.searchParam[e.prop],
                    "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r
                  }, null, 8, ["placeholder", "options", "props", "filterable", "style", "show-all-levels", "popper-class", "filter-method", "modelValue", "onUpdate:modelValue"])) : n("", !0),
                  e.type === "autocomponent" ? (o(), t(ye(e.component), {
                    key: 4,
                    searchParam: l.searchParam,
                    field: e.prop
                  }, null, 8, ["searchParam", "field"])) : n("", !0)
                ];
              }),
              _: 2
            }, 1032, ["prop"]))), 128))
          ]),
          _: 1
        }, 8, ["model", "style", "rules"]))
      ], 2),
      b("div", {
        class: "search-button",
        style: y(l.buttonStyleObject)
      }, [
        C(s(D), {
          type: "primary",
          onClick: te
        }, {
          default: u(() => [
            L(O(l.searchBtnTxt), 1)
          ]),
          _: 1
        }),
        l.canReset ? (o(), t(s(D), {
          key: 0,
          onClick: ue
        }, {
          default: u(() => a[2] || (a[2] = [
            L("重置")
          ])),
          _: 1
        })) : n("", !0),
        we(l.$slots, "funcButton", {}, void 0, !0),
        S.value ? (o(), t(s(D), {
          key: 1,
          onClick: a[0] || (a[0] = (e) => p.value = !p.value),
          icon: p.value ? s(be) : s(Se)
        }, {
          default: u(() => [
            L(O(p.value ? "收起" : "展开"), 1)
          ]),
          _: 1
        }, 8, ["icon"])) : n("", !0)
      ], 4)
    ], 64));
  }
});
export {
  De as default
};
