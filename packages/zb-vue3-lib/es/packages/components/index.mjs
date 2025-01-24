import a from "./src/ListTable/index.vue.mjs";
import m from "./src/SearchForm/index.vue.mjs";
import r from "./src/SvgIcon/index.vue.mjs";
import e from "./src/echarts/index.vue.mjs";
const l = [a, m, r, e], i = (t) => ({
  install: (n, f) => {
    t.forEach((o) => {
      let s = o.name || o.__name;
      n.component(s, o);
    });
  }
}), c = i(l), I = c.install;
export {
  e as ZbEchartsComponents,
  a as ZbListTable,
  m as ZbSearchForm,
  r as ZbSvgIcon,
  I as ZbUiInstall,
  c as default
};
