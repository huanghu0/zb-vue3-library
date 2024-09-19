import l from "./src/ListTable/index.vue.mjs";
import s from "./src/SearchForm/index.vue.mjs";
const e = [l, s], r = (n) => ({
  install: (o, c) => {
    n.forEach((t) => {
      let a = t.name || t.__name;
      o.component(a, t);
    });
  }
}), m = r(e), b = m.install;
export {
  l as ListTable,
  s as SearchForm,
  b as ZbUiInstall,
  m as default
};
