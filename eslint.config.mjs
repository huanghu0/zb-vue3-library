import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules:{
      'vue/multi-word-component-names':'off',
      'vue/no-mutating-props':'off',
      'vue/valid-v-slot':'off',
      '@typescript-eslint/no-explicit-any':'off',
      '@typescript-eslint/no-unused-expressions':'off',
      '@typescript-eslint/no-unused-vars':'off',
      '@typescript-eslint/no-unsafe-function-type':'off',
      'vue/no-multiple-template-root':'off'
    }
  }
];