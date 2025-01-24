import { defineComponent as g, ref as u, watch as E, markRaw as l, onMounted as w, onBeforeUnmount as x, resolveDirective as z, withDirectives as C, openBlock as k, createElementBlock as y, createElementVNode as R } from "vue";
import "../../../../node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/index.mjs";
import { l as p } from "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
/* empty css            */
import B from "../../../../_virtual/_plugin-vue_export-helper.mjs";
import { init as v } from "../../../../node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.mjs";
const j = {
  class: "echarts-wrap",
  "element-loading-text": "数据加载中,请稍后"
}, D = g({
  name: "ZbEchartsComponents"
}), I = /* @__PURE__ */ Object.assign(D, {
  props: {
    opts: {
      type: Object,
      defualt: {},
      required: !0
    }
  },
  setup(s, { expose: d }) {
    const r = s, t = u(), o = u(), f = p.debounce(h, 300), m = p.debounce(() => {
      var e;
      t.value && ((e = t.value) == null || e.resize());
    }, 300), a = new ResizeObserver(m);
    E(() => r.opts, (e) => {
      console.log(e, "props.opts change"), t.value || (t.value = l(v(o.value))), f(e);
    }, {
      deep: !0
    });
    function h(e) {
      var n;
      let c = { ...e };
      (n = t.value) == null || n.clear(), setTimeout(() => {
        var i;
        (i = t.value) == null || i.setOption(c, !0);
      }, 300);
    }
    function b() {
      o.value && a.observe(o.value);
    }
    function _() {
      o.value && a.unobserve(o.value);
    }
    function O() {
      t.value = l(v(o.value)), t.value.setOption(r.opts, !0), b();
    }
    return w(() => {
      O();
    }), x(() => {
      var e;
      _(), (e = t.value) == null || e.dispose();
    }), d({
      echartsInstance: t
    }), (e, c) => {
      const n = z("loading");
      return C((k(), y("div", j, [
        R("div", {
          class: "echarts-container",
          id: "echarts-container",
          ref_key: "echartsContainer",
          ref: o
        }, null, 512)
      ])), [
        [n, s.opts.loading]
      ]);
    };
  }
}), U = /* @__PURE__ */ B(I, [["__scopeId", "data-v-b4c15366"]]);
export {
  U as default
};
