import { defineComponent as ae, ref as v, watch as ce, onMounted as he, onUpdated as pe, onUnmounted as fe, openBlock as o, createElementBlock as c, Fragment as k, createElementVNode as S, normalizeClass as ie, createBlock as u, unref as s, normalizeStyle as y, withCtx as t, renderList as x, createTextVNode as L, toDisplayString as O, createVNode as B, createCommentVNode as n, renderSlot as ye } from "vue";
import { l as ee } from "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { QuestionFilled as we, CaretTop as ve, CaretBottom as Se } from "../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.6_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs";
import { ElForm as be, ElFormItem as Ve, ElTooltip as j, ElIcon as ge, ElSelect as Pe, ElOption as ke, ElInput as le, ElDatePicker as me, ElCascader as Ee, ElButton as R } from "element-plus";
const Fe = {
  key: 0,
  class: "flex"
}, Le = ["innerHTML"], Oe = ["innerHTML"], Be = { key: 1 }, Ce = { class: "basic-flex-center" }, Me = ae({
  name: "ZbSearchForm"
}), je = /* @__PURE__ */ ae({
  ...Me,
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
    const C = se, h = v(!1), b = v(!1), p = v();
    let M = null;
    const T = v(!0), U = v(!1), V = re, g = v(V.searchList);
    ce(
      () => V.searchList,
      () => {
        g.value = V.searchList;
      },
      {
        deep: !0
      }
    );
    const te = async () => {
      await D(), T.value && C("search", V.searchParam);
    }, ue = () => {
      var l;
      (l = p.value) == null || l.clearValidate(), U.value = !U.value, C("reset");
    }, ne = (l = "", a) => {
      w(), C("changeVal", l, a);
    }, A = new ResizeObserver(() => {
      w();
    });
    he(() => {
      var l;
      g.value.forEach((a) => {
        a.filterable && (a.defaultOptions = ee.cloneDeep(a.options), z("", a));
      }), w(), window.addEventListener("resize", w, { passive: !0 });
      try {
        A.observe((l = p.value) == null ? void 0 : l.$el);
      } catch {
      }
    }), pe(() => {
      w();
    }), fe(() => {
      var l;
      window.removeEventListener("resize", w);
      try {
        A.unobserve((l = p.value) == null ? void 0 : l.$el);
      } catch {
      }
    });
    const de = (l, a) => {
      g.value[l].defaultOptions = ee.cloneDeep(a), z("", g.value[l]);
    }, z = (l, a) => {
      var e;
      if (l) {
        let $ = l.toLowerCase(), f = (a == null ? void 0 : a.filterKey) ?? ["label"];
        a.options = [];
        for (let d = 0; d < a.defaultOptions.length; d++)
          f.some((P) => {
            var i;
            if (a.defaultOptions[d][P] && ((i = a.defaultOptions[d][P]) == null ? void 0 : i.toString()).toLowerCase().includes($)) return !0;
          }) && a.options.push(a.defaultOptions[d]);
      } else
        a.options = (e = a == null ? void 0 : a.defaultOptions) == null ? void 0 : e.slice(0);
    }, w = (l = null) => {
      M && clearTimeout(M), M = setTimeout(() => {
        let a = p.value;
        a && (a.$el.offsetHeight > 118 && (b.value || (h.value = !1), b.value = !0), a.$el.offsetHeight <= 118 && (b.value && (h.value = !1), b.value = !1));
      }, 300);
    };
    async function D() {
      var l;
      return await ((l = p.value) == null ? void 0 : l.validate(async (a) => a ? (T.value = !0, !0) : (T.value = !1, !1)));
    }
    return oe({
      resetOptions: de,
      submit: D,
      clearValidate: (l) => {
        var a;
        (a = p.value) == null || a.clearValidate(l);
      }
    }), (l, a) => (o(), c(k, null, [
      S("div", {
        class: ie(["search-box", h.value ? "" : "two-row", l.showAll ? "showAll" : ""])
      }, [
        (o(), u(s(be), {
          inline: "",
          model: l.searchParam,
          class: "search-form",
          ref_key: "SearchForm",
          ref: p,
          style: y(V.formStyleObject),
          rules: l.searchFormRule,
          key: U.value
        }, {
          default: t(() => [
            (o(!0), c(k, null, x(g.value, (e, $) => (o(), u(s(Ve), {
              key: $,
              prop: e.prop
            }, {
              label: t(() => {
                var f;
                return [
                  (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (f = e.isShow[1]) != null && f.includes(l.searchParam[e.isShow[0]])) ? (o(), c("div", Fe, [
                    L(O(e.label) + " ", 1),
                    e.tooltip ? (o(), u(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300
                    }, {
                      content: t(() => [
                        S("div", {
                          innerHTML: e.tooltip
                        }, null, 8, Le)
                      ]),
                      default: t(() => [
                        B(s(ge), { style: { "font-size": "12px", "margin-left": "5px" } }, {
                          default: t(() => [
                            B(s(we))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024)) : n("", !0)
                  ])) : n("", !0)
                ];
              }),
              default: t(() => {
                var f, d, H, P, i, N, I, K, m, q, Q, Z, G, E, J, F, W, X, Y, _;
                return [
                  e.type === "el-select" && (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (f = e.isShow[1]) != null && f.includes(l.searchParam[e.isShow[0]])) ? (o(), c(k, { key: 0 }, [
                    e.type === "el-select" && (!e.isShow || (d = e.isShow[1]) != null && d.includes(l.searchParam[e.isShow[0]])) ? (o(), u(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300,
                      content: ((N = (i = (P = (H = e.options) == null ? void 0 : H.find((r) => (r == null ? void 0 : r.value) == l.searchParam[e.prop])) == null ? void 0 : P.label) == null ? void 0 : i.toString) == null ? void 0 : N.call(i)) ?? "",
                      disabled: !!e.multiple || !((((Q = (q = (m = (K = (I = e.options) == null ? void 0 : I.find((r) => (r == null ? void 0 : r.value) == l.searchParam[e.prop])) == null ? void 0 : K.label) == null ? void 0 : m.toString) == null ? void 0 : q.call(m)) == null ? void 0 : Q.length) ?? 0) > 9)
                    }, {
                      default: t(() => [
                        B(s(Pe), {
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
                          default: t(() => [
                            (o(!0), c(k, null, x(e.options, (r) => (o(), u(s(ke), {
                              key: r.value,
                              value: r.value,
                              label: r.label,
                              style: y(r.styleObject)
                            }, {
                              default: t(() => [
                                r.showLabel ? (o(), c("div", {
                                  key: 0,
                                  innerHTML: r.showLabel
                                }, null, 8, Oe)) : n("", !0),
                                r.isEmphasize ? (o(), c("div", Be, [
                                  S("div", Ce, [
                                    S("div", null, O(r.label), 1),
                                    a[1] || (a[1] = S("div", { class: "basic-emphasize-tag" }, "重要", -1))
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
                    e.type === "el-input" && (!e.isShow || (G = e.isShow[1]) != null && G.includes(l.searchParam[e.isShow[0]])) ? (o(), u(s(j), {
                      key: 0,
                      placement: "top",
                      "hide-after": 300,
                      content: ((J = (E = l.searchParam[e.prop]) == null ? void 0 : E.toString) == null ? void 0 : J.call(E)) ?? "",
                      disabled: !((((X = (W = (F = l.searchParam[e.prop]) == null ? void 0 : F.toString) == null ? void 0 : W.call(F)) == null ? void 0 : X.length) ?? 0) > 9)
                    }, {
                      default: t(() => [
                        e.notTrim ? (o(), u(s(le), {
                          key: 0,
                          modelValue: l.searchParam[e.prop],
                          "onUpdate:modelValue": (r) => l.searchParam[e.prop] = r,
                          clearable: "",
                          placeholder: e.placeholder,
                          style: y(e.width ? `width:${e.width}` : "")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "style"])) : (o(), u(s(le), {
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
                  e.type === "el-date-picker" && (e.isShowFunc ? e.isShowFunc(l.searchParam) : !e.isShow || (Y = e.isShow[1]) != null && Y.includes(l.searchParam[e.isShow[0]])) ? (o(), u(s(me), {
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
                  e.type === "el-cascader" && (!e.isShow || (_ = e.isShow[1]) != null && _.includes(l.searchParam[e.isShow[0]])) ? (o(), u(s(Ee), {
                    key: 3,
                    placeholder: e.placeholder,
                    options: e.options,
                    props: {
                      multiple: !!e.multiple,
                      checkStrictly: !!e.checkStrictly
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
                  }, null, 8, ["placeholder", "options", "props", "filterable", "style", "show-all-levels", "popper-class", "filter-method", "modelValue", "onUpdate:modelValue"])) : n("", !0)
                ];
              }),
              _: 2
            }, 1032, ["prop"]))), 128))
          ]),
          _: 1
        }, 8, ["model", "style", "rules"]))
      ], 2),
      S("div", {
        class: "search-button",
        style: y(l.buttonStyleObject)
      }, [
        B(s(R), {
          type: "primary",
          onClick: te
        }, {
          default: t(() => [
            L(O(l.searchBtnTxt), 1)
          ]),
          _: 1
        }),
        l.canReset ? (o(), u(s(R), {
          key: 0,
          onClick: ue
        }, {
          default: t(() => a[2] || (a[2] = [
            L("重置")
          ])),
          _: 1
        })) : n("", !0),
        ye(l.$slots, "funcButton", {}, void 0, !0),
        b.value ? (o(), u(s(R), {
          key: 1,
          onClick: a[0] || (a[0] = (e) => h.value = !h.value),
          icon: h.value ? s(ve) : s(Se)
        }, {
          default: t(() => [
            L(O(h.value ? "收起" : "展开"), 1)
          ]),
          _: 1
        }, 8, ["icon"])) : n("", !0)
      ], 4)
    ], 64));
  }
});
export {
  je as default
};
