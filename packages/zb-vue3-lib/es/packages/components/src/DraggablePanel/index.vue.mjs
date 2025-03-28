import { defineComponent as v, watch as f, openBlock as d, createElementBlock as i, Fragment as g, renderList as _, normalizeStyle as p, createElementVNode as y, renderSlot as b, createCommentVNode as E } from "vue";
/* empty css            */
import z from "../../../../_virtual/_plugin-vue_export-helper.mjs";
const L = { class: "draggable-panel" }, W = ["onMousedown"], k = v({
  name: "ZbDraggablePanel"
}), x = /* @__PURE__ */ Object.assign(k, {
  props: {
    columns: {
      type: Array,
      required: !0,
      default: []
    }
  },
  setup(a) {
    const n = a;
    f(
      () => n.columns.length,
      (t) => {
        setTimeout(() => {
          let r = document.querySelector(".draggable-panel").clientWidth;
          n.columns.forEach((e) => {
            e.width = r / t;
          });
        }, 200);
      },
      { immediate: !0, deep: !0 }
    );
    const w = (t, r) => {
      const e = r.clientX, c = n.columns[t].width || 100, l = n.columns[t + 1].width || 100, m = (h) => {
        const o = c + (h.clientX - e), s = l - (h.clientX - e);
        o < 100 ? (o = 100, s = s - (100 - o)) : s < 100 && (s = 100, o = o - (100 - s)), n.columns[t].width = Math.max(100, o), n.columns[t + 1].width = Math.max(100, s);
      }, u = () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", u);
      };
      document.addEventListener("mousemove", m), document.addEventListener("mouseup", u);
    };
    return (t, r) => (d(), i("div", L, [
      (d(!0), i(g, null, _(a.columns, (e, c) => (d(), i("div", {
        key: e.id,
        class: "column",
        style: p({ width: e.width + "px" })
      }, [
        y("div", {
          class: "content",
          style: p({ width: e.width - 8 + "px" })
        }, [
          b(t.$slots, e.id, {}, void 0, !0)
        ], 4),
        c !== a.columns.length - 1 ? (d(), i("div", {
          key: 0,
          class: "resizer",
          onMousedown: (l) => w(c, l)
        }, null, 40, W)) : E("", !0)
      ], 4))), 128))
    ]));
  }
}), N = /* @__PURE__ */ z(x, [["__scopeId", "data-v-98975723"]]);
export {
  N as default
};
