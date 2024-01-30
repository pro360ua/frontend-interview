module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // -- enforce curly braces even for one-liners
    curly: ["error", "all"],

    "padding-line-between-statements": [
      "error",

      // -- enforce newline before return statement
      { blankLine: "always", prev: "*", next: "return" },

      // -- enforce newline before and after if condition block
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
    ],

    // -- react-ts
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // -- react-ts hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // -- tsconfig.json will handle these
    "no-unused-vars": "off",

    // -- make sure type imports are consistent and inlined
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
