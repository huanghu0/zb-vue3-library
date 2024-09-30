import { defineComponent as e, openBlock as n, createBlock as r, unref as t, withCtx as c, createElementVNode as i } from "vue";
import { ElIcon as s } from "element-plus";
const l = ["innerHTML"], p = e({
  name: "ZbSvgIcon"
}), u = /* @__PURE__ */ e({
  ...p,
  props: {
    iconStr: {},
    size: {},
    color: {}
  },
  setup(a) {
    return (o, _) => (n(), r(t(s), {
      size: o.size,
      color: o.color
    }, {
      default: c(() => [
        i("span", { innerHTML: o.iconStr }, null, 8, l)
      ]),
      _: 1
    }, 8, ["size", "color"]));
  }
});
export {
  u as default
};
