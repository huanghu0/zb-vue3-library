import { defineComponent as z, ref as c, onMounted as R, onUpdated as V, onUnmounted as F, watch as U, nextTick as W, resolveComponent as j, resolveDirective as I, openBlock as l, createElementBlock as v, normalizeStyle as k, withDirectives as K, createBlock as d, unref as r, withCtx as i, createCommentVNode as f, Fragment as q, renderList as Q, createSlots as Z, createTextVNode as A, toDisplayString as G, createVNode as C, createElementVNode as b, resolveDynamicComponent as J, renderSlot as T } from "vue";
import { QuestionFilled as X } from "../../../../node_modules/.pnpm/@element-plus_icons-vue@2.3.1_vue@3.5.6_typescript@5.6.2_/node_modules/@element-plus/icons-vue/dist/index.mjs";
import { ElTable as Y, ElTableColumn as w, ElIcon as _, ElPagination as ee } from "element-plus";
const te = ["innerHTML"], ne = ["innerHTML", "onClick"], ae = ["innerHTML"], oe = ["innerHTML", "onClick"], le = z({
  name: "ZbListTable"
}), pe = /* @__PURE__ */ z({
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
      pageSizes: [10, 20, 30, 50, 100],
      layout: "total, sizes, prev, pager, next, jumper",
      paginationContainerStyle: ""
    }) },
    styleObject: {},
    tableKey: { default: !0 },
    showHeader: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["handleSizeChange", "handleCurrentChange", "handleSelectionChange", "handleSortChange"],
  setup(H, { expose: L, emit: x }) {
    const s = x, y = c(), m = c(500), h = c([]);
    R(() => {
      u(), window.addEventListener("resize", u, { passive: !0 });
    }), V(() => {
      u();
    }), F(() => {
      window.removeEventListener("resize", u);
    });
    const n = H, S = (e, o) => e(o), u = () => {
      var o, p, g;
      let e = 0;
      (o = n == null ? void 0 : n.tableOption) != null && o.maxHeight ? e = (p = n == null ? void 0 : n.tableOption) == null ? void 0 : p.maxHeight : (e = window.innerHeight - (n.tableOption.hasPagination ? 147 : 80) - (((g = n.tableOption) == null ? void 0 : g.extraHeight) ?? 0), e = Math.max(e, 300)), m.value = e;
    }, M = (e) => {
      s("handleSizeChange", e);
    }, D = (e) => {
      s("handleCurrentChange", e);
    }, E = (e) => {
      s("handleSelectionChange", e);
    }, N = (e) => {
      s("handleSortChange", e);
    }, $ = (e) => {
      y.value.toggleRowSelection(e, !0);
    }, B = () => {
      y.value.clearSelection();
    };
    return U(
      () => n.tableData,
      async (e, o) => {
        if (o == e) {
          h.value = n.tableData;
          return;
        }
        h.value = [], await W(), h.value = n.tableData;
      },
      {
        immediate: !0,
        deep: !0
      }
    ), L({
      toggleRowSelection: $,
      clearSelection: B
    }), (e, o) => {
      var O;
      const p = j("el-tooltip"), g = I("loading");
      return l(), v("div", {
        class: "list-table",
        style: k(n.styleObject)
      }, [
        K((l(), d(r(Y), {
          data: h.value,
          style: { width: "100%" },
          "header-cell-style": ((O = n.tableOption) == null ? void 0 : O.headerCellStyle) ?? { color: "#555" },
          "max-height": m.value,
          ref_key: "tableRef",
          ref: y,
          onSelectionChange: E,
          onSortChange: N,
          key: e.tableKey,
          "show-header": n.showHeader,
          "row-key": e.tableOption.rowKey,
          border: e.tableOption.border
        }, {
          default: i(() => [
            e.tableOption.multiple ? (l(), d(r(w), {
              key: 0,
              type: "selection",
              width: "60",
              "reserve-selection": e.tableOption.reserveSelection,
              fixed: !0
            }, null, 8, ["reserve-selection"])) : f("", !0),
            e.tableOption.index ? (l(), d(r(w), {
              key: 1,
              type: "index",
              width: e.tableOption.indexWidth,
              label: e.tableOption.indexLabel,
              fixed: !0,
              index: e.tableOption.indexMethod ? e.tableOption.indexMethod : ""
            }, null, 8, ["width", "label", "index"])) : f("", !0),
            (l(!0), v(q, null, Q(e.tableList, (t) => (l(), d(r(w), {
              key: t.prop,
              label: t.label,
              prop: t.prop,
              width: t.width,
              "min-width": t.minWidth,
              align: t.alignRight ? "right" : "left",
              "show-overflow-tooltip": t.tooltip,
              fixed: t.fixed,
              sortable: t.sortable ?? !1
            }, Z({ _: 2 }, [
              t.headerToolTip ? {
                name: "header",
                fn: i(() => [
                  A(G(t.label) + " ", 1),
                  C(p, { placement: "top" }, {
                    content: i(() => [
                      b("div", {
                        innerHTML: t.headerToolTip
                      }, null, 8, te)
                    ]),
                    default: i(() => [
                      C(r(_), { size: "14" }, {
                        default: i(() => [
                          C(r(X))
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
                  t.designTooltipContentInFormat ? (l(), d(p, {
                    key: 1,
                    placement: "top",
                    disabled: t.disabledTootip && t.disabledTootip(a.row)
                  }, {
                    content: i(() => [
                      b("div", {
                        innerHTML: t.designTooltipContentInFormat
                      }, null, 8, ae)
                    ]),
                    default: i(() => [
                      b("span", {
                        innerHTML: S(t.format, a.row),
                        onClick: (P) => t.method ? t.method(a.row) : ""
                      }, null, 8, oe)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])) : (l(), v("span", {
                    key: 0,
                    innerHTML: S(t.format, a.row),
                    onClick: (P) => t.method ? t.method(a.row) : ""
                  }, null, 8, ne))
                ]),
                key: "1"
              } : void 0,
              t.vueComponent ? {
                name: "default",
                fn: i((a) => [
                  (l(), d(J(t.vueComponent), {
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
                  T(e.$slots, "slot", {
                    data: a.row,
                    field: a.column,
                    index: a.$index
                  }, void 0, !0)
                ]),
                key: "3"
              } : void 0
            ]), 1032, ["label", "prop", "width", "min-width", "align", "show-overflow-tooltip", "fixed", "sortable"]))), 128)),
            e.tableOption.operateWidth ? (l(), d(r(w), {
              key: 2,
              label: "操作",
              width: e.tableOption.operateWidth,
              fixed: e.tableOption.fixed
            }, {
              default: i((t) => [
                T(e.$slots, "operate", {
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
        b("div", {
          style: k(e.pageOption.paginationContainerStyle)
        }, [
          e.tableOption.hasPagination ? (l(), d(r(ee), {
            key: 0,
            "current-page": e.pageOption.pageNo,
            "onUpdate:currentPage": o[0] || (o[0] = (t) => e.pageOption.pageNo = t),
            "page-size": e.pageOption.pageSize,
            "onUpdate:pageSize": o[1] || (o[1] = (t) => e.pageOption.pageSize = t),
            "page-sizes": e.pageOption.pageSizes,
            background: "",
            layout: e.pageOption.layout,
            total: e.pageOption.total,
            onSizeChange: M,
            onCurrentChange: D
          }, null, 8, ["current-page", "page-size", "page-sizes", "layout", "total"])) : f("", !0)
        ], 4)
      ], 4);
    };
  }
});
export {
  pe as default
};
