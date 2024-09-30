import s from "./src/ListTable/index.vue.mjs";
import l from "./src/SearchForm/index.vue.mjs";
import e from "./src/SvgIcon/index.vue.mjs";
const m = [s, l, e], r = (t) => ({
  install: (o, p) => {
    t.forEach((n) => {
      let a = n.name || n.__name;
      o.component(a, n);
    });
  }
}), i = r(m), _ = i.install;
export {
  s as ZbListTable,
  l as ZbSearchForm,
  e as ZbSvgIcon,
  _ as ZbUiInstall,
  i as default
};
