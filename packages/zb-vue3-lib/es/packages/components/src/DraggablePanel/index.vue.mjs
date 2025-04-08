import { defineComponent as E, watch as f, onMounted as b, onUnmounted as _, openBlock as l, createElementBlock as r, Fragment as y, renderList as z, normalizeStyle as w, createElementVNode as L, renderSlot as W, createCommentVNode as M } from "vue";
/* empty css            */
import S from "../../../../_virtual/_plugin-vue_export-helper.mjs";
const k = { class: "draggable-panel" }, q = ["onMousedown"], x = E({
  name: "ZbDraggablePanel"
}), X = /* @__PURE__ */ Object.assign(x, {
  props: {
    columns: {
      type: Array,
      required: !0,
      default: []
    }
  },
  setup(d) {
    const n = d;
    f(
      () => n.columns.length,
      (e) => {
        setTimeout(() => {
          let o = document.querySelector(".draggable-panel").clientWidth;
          n.columns.forEach((t) => {
            t.width = o / e;
          });
        }, 200);
      },
      { immediate: !0, deep: !0 }
    );
    const p = (e, o) => {
      const t = o.clientX, s = n.columns[e].width || 100, c = n.columns[e + 1].width || 100, u = (h) => {
        let v = s + (h.clientX - t), g = c - (h.clientX - t);
        n.columns[e].width = Math.max(100, v), n.columns[e + 1].width = Math.max(100, g);
      }, m = () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", m);
      };
      document.addEventListener("mousemove", u), document.addEventListener("mouseup", m);
    }, i = (e) => {
      setTimeout(() => {
        let o = document.querySelector(".draggable-panel").scrollWidth;
        n.columns.forEach((t) => {
          t.width = o / n.columns.length;
        });
      }, 200);
    }, a = () => {
      console.log("resize"), setTimeout(() => {
        let e = document.querySelector(".draggable-panel").scrollWidth;
        n.columns.forEach((o) => {
          o.width = e / n.columns.length;
        });
      }, 200);
    };
    return b(() => {
      document.addEventListener("wheel", i), window.addEventListener("resize", a);
    }), _(() => {
      document.removeEventListener("wheel", i), window.removeEventListener("resize", a);
    }), (e, o) => (l(), r("div", k, [
      (l(!0), r(y, null, z(d.columns, (t, s) => (l(), r("div", {
        key: t.id,
        class: "column",
        style: w({ width: t.width + "px" })
      }, [
        L("div", {
          class: "content",
          style: w({ width: t.width - 8 + "px" })
        }, [
          W(e.$slots, t.id, {}, void 0, !0)
        ], 4),
        s !== d.columns.length - 1 ? (l(), r("div", {
          key: 0,
          class: "resizer",
          onMousedown: (c) => p(s, c)
        }, null, 40, q)) : M("", !0)
      ], 4))), 128))
    ]));
  }
}), B = /* @__PURE__ */ S(X, [["__scopeId", "data-v-b356be9e"]]);
export {
  B as default
};
