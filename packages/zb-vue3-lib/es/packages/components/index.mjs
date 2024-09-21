import l from "./src/ListTable/index.vue.mjs";
import s from "./src/SearchForm/index.vue.mjs";
const e = [l, s], r = (n) => ({
  install: (o, c) => {
    n.forEach((t) => {
      let a = t.name || t.__name;
      o.component(a, t);
    });
  }
}), m = r(e), f = m.install;
export {
  l as ZbListTable,
  s as ZbSearchForm,
  f as ZbUiInstall,
  m as default
};
