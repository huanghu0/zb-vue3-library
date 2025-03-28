import { defineComponent as f, watch as v, openBlock as r, createElementBlock as d, Fragment as g, renderList as _, normalizeStyle as u, createElementVNode as y, renderSlot as b, createCommentVNode as E } from "vue";
/* empty css            */
import z from "../../../../_virtual/_plugin-vue_export-helper.mjs";
const L = { class: "draggable-panel" }, W = ["onMousedown"], k = f({
  name: "ZbDraggablePanel"
}), x = /* @__PURE__ */ Object.assign(k, {
  props: {
    columns: {
      type: Array,
      required: !0,
      default: []
    }
  },
  setup(c) {
    const n = c;
    v(
      () => n.columns.length,
      (t) => {
        setTimeout(() => {
          let o = document.querySelector(".draggable-panel").clientWidth;
          n.columns.forEach((e) => {
            e.width = o / t;
          });
        }, 200);
      },
      { immediate: !0, deep: !0 }
    );
    const h = (t, o) => {
      const e = o.clientX, s = n.columns[t].width || 100, l = n.columns[t + 1].width || 100, a = (m) => {
        let p = s + (m.clientX - e), w = l - (m.clientX - e);
        n.columns[t].width = Math.max(100, p), n.columns[t + 1].width = Math.max(100, w);
      }, i = () => {
        document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", i);
      };
      document.addEventListener("mousemove", a), document.addEventListener("mouseup", i);
    };
    return (t, o) => (r(), d("div", L, [
      (r(!0), d(g, null, _(c.columns, (e, s) => (r(), d("div", {
        key: e.id,
        class: "column",
        style: u({ width: e.width + "px" })
      }, [
        y("div", {
          class: "content",
          style: u({ width: e.width - 8 + "px" })
        }, [
          b(t.$slots, e.id, {}, void 0, !0)
        ], 4),
        s !== c.columns.length - 1 ? (r(), d("div", {
          key: 0,
          class: "resizer",
          onMousedown: (l) => h(s, l)
        }, null, 40, W)) : E("", !0)
      ], 4))), 128))
    ]));
  }
}), N = /* @__PURE__ */ z(x, [["__scopeId", "data-v-d903fff9"]]);
export {
  N as default
};
