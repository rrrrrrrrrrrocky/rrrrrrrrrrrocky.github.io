module.exports = {
  extends: [
    "@rrrrrrrrrrr/eslint-config/typescript",
    "@rrrrrrrrrrr/eslint-config/next",
    "@rrrrrrrrrrr/eslint-config/tailwindcss",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.config.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  // TODO: 컴포넌트(jsx | tsx) export default가 없으면 에러띄우는 룰 찾아보기
  rules: {
    "@typescript-eslint/no-misused-promises": "off",
  },
};
