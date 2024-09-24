import { defineComponent as T, ref as c, onMounted as P, onUpdated as R, onUnmounted as V, watch as F, nextTick as U, resolveComponent as W, resolveDirective as j, openBlock as l, createElementBlock as m, normalizeStyle as I, withDirectives as K, createBlock as d, unref as r, withCtx as i, createCommentVNode as f, Fragment as _, renderList as q, createSlots as Q, createTextVNode as Z, toDisplayString as A, createVNode as v, createElementVNode as C, resolveDynamicComponent as G, renderSlot as k } from "vue";
import { QuestionFilled as J } from "../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.6_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs";
import { ElTable as X, ElTableColumn as b, ElIcon as Y, ElPagination as ee } from "element-plus";
const te = ["innerHTML"], ne = ["innerHTML", "onClick"], ae = ["innerHTML"], oe = ["innerHTML", "onClick"], le = T({
  name: "ZbListTable"
}), se = /* @__PURE__ */ T({
  ...le,
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
      pageNo: 1,
      pageSizes: [10, 20, 30, 50, 100]
    }) },
    styleObject: {},
    tableKey: { default: !0 },
    showHeader: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["handleSizeChange", "handleCurrentChange", "handleSelectionChange", "handleSortChange"],
  setup(z, { expose: H, emit: x }) {
    const p = x, w = c(), y = c(500), h = c([]);
    P(() => {
      u(), window.addEventListener("resize", u, { passive: !0 });
    }), R(() => {
      u();
    }), V(() => {
      window.removeEventListener("resize", u);
    });
    const n = z, S = (e, o) => e(o), u = () => {
      var o, s, g;
      let e = 0;
      (o = n == null ? void 0 : n.tableOption) != null && o.maxHeight ? e = (s = n == null ? void 0 : n.tableOption) == null ? void 0 : s.maxHeight : (e = window.innerHeight - (n.tableOption.hasPagination ? 147 : 80) - (((g = n.tableOption) == null ? void 0 : g.extraHeight) ?? 0), e = Math.max(e, 300)), y.value = e;
    }, L = (e) => {
      p("handleSizeChange", e);
    }, M = (e) => {
      p("handleCurrentChange", e);
    }, D = (e) => {
      p("handleSelectionChange", e);
    }, E = (e) => {
      p("handleSortChange", e);
    }, N = (e) => {
      w.value.toggleRowSelection(e, !0);
    }, $ = () => {
      w.value.clearSelection();
    };
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
    ), H({
      toggleRowSelection: N,
      clearSelection: $
    }), (e, o) => {
      var O;
      const s = W("el-tooltip"), g = j("loading");
      return l(), m("div", {
        class: "list-table",
        style: I(n.styleObject)
      }, [
        K((l(), d(r(X), {
          data: h.value,
          style: { width: "100%" },
          "header-cell-style": ((O = n.tableOption) == null ? void 0 : O.headerCellStyle) ?? { color: "#555" },
          "max-height": y.value,
          ref_key: "tableRef",
          ref: w,
          onSelectionChange: D,
          onSortChange: E,
          key: e.tableKey,
          "show-header": n.showHeader,
          "row-key": e.tableOption.rowKey,
          border: e.tableOption.border
        }, {
          default: i(() => [
            e.tableOption.multiple ? (l(), d(r(b), {
              key: 0,
              type: "selection",
              width: "60",
              "reserve-selection": e.tableOption.reserveSelection,
              fixed: !0
            }, null, 8, ["reserve-selection"])) : f("", !0),
            e.tableOption.index ? (l(), d(r(b), {
              key: 1,
              type: "index",
              width: e.tableOption.indexWidth,
              label: e.tableOption.indexLabel,
              fixed: !0,
              index: e.tableOption.indexMethod ? e.tableOption.indexMethod : ""
            }, null, 8, ["width", "label", "index"])) : f("", !0),
            (l(!0), m(_, null, q(e.tableList, (t) => (l(), d(r(b), {
              key: t.prop,
              label: t.label,
              prop: t.prop,
              width: t.width,
              "min-width": t.minWidth,
              align: t.alignRight ? "right" : "left",
              "show-overflow-tooltip": t.tooltip,
              fixed: t.fixed,
              sortable: t.sortable ?? !1
            }, Q({ _: 2 }, [
              t.headerToolTip ? {
                name: "header",
                fn: i(() => [
                  Z(A(t.label) + " ", 1),
                  v(s, { placement: "top" }, {
                    content: i(() => [
                      C("div", {
                        innerHTML: t.headerToolTip
                      }, null, 8, te)
                    ]),
                    default: i(() => [
                      v(r(Y), { size: "14" }, {
                        default: i(() => [
                          v(r(J))
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
                  t.designTooltipContentInFormat ? (l(), d(s, {
                    key: 1,
                    placement: "top",
                    disabled: t.disabledTootip && t.disabledTootip(a.row)
                  }, {
                    content: i(() => [
                      C("div", {
                        innerHTML: t.designTooltipContentInFormat
                      }, null, 8, ae)
                    ]),
                    default: i(() => [
                      C("span", {
                        innerHTML: S(t.format, a.row),
                        onClick: (B) => t.method ? t.method(a.row) : ""
                      }, null, 8, oe)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])) : (l(), m("span", {
                    key: 0,
                    innerHTML: S(t.format, a.row),
                    onClick: (B) => t.method ? t.method(a.row) : ""
                  }, null, 8, ne))
                ]),
                key: "1"
              } : void 0,
              t.vueComponent ? {
                name: "default",
                fn: i((a) => [
                  (l(), d(G(t.vueComponent), {
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
            e.tableOption.operateWidth ? (l(), d(r(b), {
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
        e.tableOption.hasPagination ? (l(), d(r(ee), {
          key: 0,
          "current-page": e.pageOption.pageNo,
          "onUpdate:currentPage": o[0] || (o[0] = (t) => e.pageOption.pageNo = t),
          "page-size": e.pageOption.pageSize,
          "onUpdate:pageSize": o[1] || (o[1] = (t) => e.pageOption.pageSize = t),
          "page-sizes": e.pageOption.pageSizes,
          background: "",
          layout: "total, sizes, prev, pager, next, jumper",
          total: e.pageOption.total,
          onSizeChange: L,
          onCurrentChange: M
        }, null, 8, ["current-page", "page-size", "page-sizes", "total"])) : f("", !0)
      ], 4);
    };
  }
});
export {
  se as default
};
