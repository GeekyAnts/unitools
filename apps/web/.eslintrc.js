/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["./next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
