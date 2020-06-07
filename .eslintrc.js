module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  ignorePatterns: ["public/js/app.js"],
  rules: {
    "no-debug": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
