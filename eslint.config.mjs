import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "error", // ❗สำคัญมากสำหรับ JSX
      "react/jsx-uses-react": "off", // ถ้าใช้ React 17+ (no need to import React)
      "react/jsx-uses-vars": "error", // JSX ที่ไม่ได้ import จะเตือน
      "no-unused-vars": "error",
      "react/prop-types": "off",
      "react/jsx-no-undef": "error",
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react/self-closing-comp": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-wrap-multilines": "error",
      "react/require-default-props": "off",
      "react/default-props-match-prop-types": "off",
      "react/no-unused-prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
