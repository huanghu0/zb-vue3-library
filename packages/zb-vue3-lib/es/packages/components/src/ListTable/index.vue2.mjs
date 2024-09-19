import { defineComponent as P, ref as w, onMounted as R, onUpdated as V, onUnmounted as _, watch as F, nextTick as U, resolveComponent as j, resolveDirective as I, openBlock as l, createElementBlock as m, normalizeStyle as K, withDirectives as W, createBlock as r, unref as d, withCtx as i, createCommentVNode as f, Fragment as q, renderList as Q, createSlots as A, createTextVNode as G, toDisplayString as J, createVNode as v, createElementVNode as C, resolveDynamicComponent as X, renderSlot as k } from "vue";
import { QuestionFilled as Y } from "../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.6_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs";
import { ElTable as Z, ElTableColumn as b, ElIcon as ee, ElPagination as te } from "element-plus";
const ne = ["innerHTML"], ae = ["innerHTML", "onClick"], oe = ["innerHTML"], le = ["innerHTML", "onClick"], se = /* @__PURE__ */ P({
  __name: "index",
  props: {
    tableOption: { default: () => ({
      multiple: !1,
      index: !0,
      hasPagination: !1,
      extraHeight: 0,
      headerCellStyle: { color: "#555" }
    }) },
    tableData: { default: () => [] },
    tableList: { default: () => [] },
    pageOption: { default: () => ({
      total: 0,
      pageSize: 20,
      pageNo: 1
    }) },
    styleObject: {},
    tableKey: { default: !0 },
    showHeader: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["handleSizeChange", "handleCurrentChange", "handleSelectionChange", "handleSortChange"],
  setup(T, { expose: x, emit: H }) {
    const p = H, c = w(), y = w(500), h = w([]);
    R(() => {
      u(), window.addEventListener("resize", u, { passive: !0 });
    }), V(() => {
      u();
    }), _(() => {
      window.removeEventListener("resize", u);
    });
    const n = T, S = (e, o) => e(o), u = () => {
      var o, s, g;
      let e = 0;
      (o = n == null ? void 0 : n.tableOption) != null && o.maxHeight ? e = (s = n == null ? void 0 : n.tableOption) == null ? void 0 : s.maxHeight : (e = window.innerHeight - (n.tableOption.hasPagination ? 147 : 80) - (((g = n.tableOption) == null ? void 0 : g.extraHeight) ?? 0), e = Math.max(e, 300)), y.value = e;
    }, z = (e) => {
      p("handleSizeChange", e);
    }, L = (e) => {
      p("handleCurrentChange", e);
    }, M = (e) => {
      p("handleSelectionChange", e);
    }, D = (e) => {
      p("handleSortChange", e);
    }, E = (e) => {
      c.value.toggleRowSelection(e, !0);
    }, N = () => {
      c.value.clearSelection();
    };
    function $(e) {
      return e + (n.pageOption.pageNo - 1) * n.pageOption.pageSize + 1;
    }
    return F(
      () => n.tableData,
      async (e, o) => {
        if (o == e) {
          h.value = n.tableData;
          return;
        }
        h.value = [], await U(), h.value = n.tableData;
      },
      {
        immediate: !0,
        deep: !0
      }
    ), x({
      toggleRowSelection: E,
      clearSelection: N
    }), (e, o) => {
      var O;
      const s = j("el-tooltip"), g = I("loading");
      return l(), m("div", {
        class: "list-table",
        style: K(n.styleObject)
      }, [
        W((l(), r(d(Z), {
          data: h.value,
          style: { width: "100%" },
          "header-cell-style": ((O = n.tableOption) == null ? void 0 : O.headerCellStyle) ?? { color: "#555" },
          "max-height": y.value,
          ref_key: "tableRef",
          ref: c,
          onSelectionChange: M,
          onSortChange: D,
          key: e.tableKey,
          "show-header": n.showHeader,
          "row-key": e.tableOption.rowKey,
          border: e.tableOption.border
        }, {
          default: i(() => [
            e.tableOption.multiple ? (l(), r(d(b), {
              key: 0,
              type: "selection",
              width: "60",
              "reserve-selection": e.tableOption.reserveSelection,
              fixed: !0
            }, null, 8, ["reserve-selection"])) : f("", !0),
            e.tableOption.index ? (l(), r(d(b), {
              key: 1,
              type: "index",
              width: "50",
              fixed: !0,
              index: $
            })) : f("", !0),
            (l(!0), m(q, null, Q(e.tableList, (t) => (l(), r(d(b), {
              key: t.prop,
              label: t.label,
              prop: t.prop,
              width: t.width,
              "min-width": t.minWidth,
              align: t.alignRight ? "right" : "left",
              "show-overflow-tooltip": t.tooltip,
              fixed: t.fixed,
              sortable: t.sortable ?? !1
            }, A({ _: 2 }, [
              t.headerToolTip ? {
                name: "header",
                fn: i(() => [
                  G(J(t.label) + " ", 1),
                  v(s, { placement: "top" }, {
                    content: i(() => [
                      C("div", {
                        innerHTML: t.headerToolTip
                      }, null, 8, ne)
                    ]),
                    default: i(() => [
                      v(d(ee), { size: "14" }, {
                        default: i(() => [
                          v(d(Y))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)
                ]),
                key: "0"
              } : void 0,
              t.format ? {
                name: "default",
                fn: i((a) => [
                  t.designTooltipContentInFormat ? (l(), r(s, {
                    key: 1,
                    placement: "top",
                    disabled: t.disabledTootip && t.disabledTootip(a.row)
                  }, {
                    content: i(() => [
                      C("div", {
                        innerHTML: t.designTooltipContentInFormat
                      }, null, 8, oe)
                    ]),
                    default: i(() => [
                      C("span", {
                        innerHTML: S(t.format, a.row),
                        onClick: (B) => t.method ? t.method(a.row) : ""
                      }, null, 8, le)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])) : (l(), m("span", {
                    key: 0,
                    innerHTML: S(t.format, a.row),
                    onClick: (B) => t.method ? t.method(a.row) : ""
                  }, null, 8, ae))
                ]),
                key: "1"
              } : void 0,
              t.vueComponent ? {
                name: "default",
                fn: i((a) => [
                  (l(), r(X(t.vueComponent), {
                    data: a.row,
                    field: a.column,
                    index: a.$index
                  }, null, 8, ["data", "field", "index"]))
                ]),
                key: "2"
              } : void 0,
              t.slot ? {
                name: "default",
                fn: i((a) => [
                  k(e.$slots, "slot", {
                    data: a.row,
                    field: a.column,
                    index: a.$index
                  }, void 0, !0)
                ]),
                key: "3"
              } : void 0
            ]), 1032, ["label", "prop", "width", "min-width", "align", "show-overflow-tooltip", "fixed", "sortable"]))), 128)),
            e.tableOption.operateWidth ? (l(), r(d(b), {
              key: 2,
              label: "操作",
              width: e.tableOption.operateWidth,
              fixed: e.tableOption.fixed
            }, {
              default: i((t) => [
                k(e.$slots, "operate", {
                  data: t.row,
                  field: t.column,
                  index: t.$index
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["width", "fixed"])) : f("", !0)
          ]),
          _: 3
        }, 8, ["data", "header-cell-style", "max-height", "show-header", "row-key", "border"])), [
          [g, e.loading]
        ]),
        e.tableOption.hasPagination ? (l(), r(d(te), {
          key: 0,
          "current-page": e.pageOption.pageNo,
          "onUpdate:currentPage": o[0] || (o[0] = (t) => e.pageOption.pageNo = t),
          "page-size": e.pageOption.pageSize,
          "onUpdate:pageSize": o[1] || (o[1] = (t) => e.pageOption.pageSize = t),
          "page-sizes": [10, 20, 30, 50, 100],
          background: "",
          layout: "total, sizes, prev, pager, next, jumper",
          total: e.pageOption.total,
          onSizeChange: z,
          onCurrentChange: L
        }, null, 8, ["current-page", "page-size", "total"])) : f("", !0)
      ], 4);
    };
  }
});
export {
  se as default
};
