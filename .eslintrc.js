/* eslint-env node */

module.exports = {
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  overrides: [{
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
      sourceType: "module",
      ecmaVersion: 2022,
    },
    plugins: [
      "@typescript-eslint",
      "vue",
    ],
    files: ["**/*.ts", "**/*.vue", "**/spec/**/*.js"],
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
  }],
}
