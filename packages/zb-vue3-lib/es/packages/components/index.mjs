import r from "./src/ListTable/index.vue.mjs";
import m from "./src/SearchForm/index.vue.mjs";
import s from "./src/SvgIcon/index.vue.mjs";
import e from "./src/echarts/index.vue.mjs";
import l from "./src/DraggablePanel/index.vue.mjs";
const i = [r, m, s, e, l], c = (t) => ({
  install: (n, f) => {
    t.forEach((o) => {
      let a = o.name || o.__name;
      n.component(a, o);
    });
  }
}), p = c(i), u = p.install;
export {
  l as ZbDraggablePanel,
  e as ZbEchartsComponents,
  r as ZbListTable,
  m as ZbSearchForm,
  s as ZbSvgIcon,
  u as ZbUiInstall,
  p as default
};
