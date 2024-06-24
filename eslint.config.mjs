import path from "node:path";
import { fileURLToPath } from "node:url";

import globals from "globals";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:@typescript-eslint/recommended",
)), {
  languageOptions: {
    globals: {
      ...globals.node,
    },

    parser: tsParser,
    ecmaVersion: 2020,
    sourceType: "module",

    parserOptions: {
      ecmaFeatures: {
        legacyDecorators: true,
      },
    },
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },

  rules: {
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/prefer-as-const": 0,
    "array-type": 0,
    "arrow-parens": 0,
    curly: 0,
    "default-case-last": 1,
    "import/export": 0,
    "import/no-deprecated": 2,
    "import/no-named-as-default": 0,
    "import/order": 1,
    "interface-over-type-literal": 0,
    "max-line-length": 0,
    "no-async-promise-executor": 1,
    "no-await-in-loop": 0,
    "no-confusing-arrow": 1,
    "no-console": 0,
    "no-eval": 2,
    "no-implied-eval": 2,
    "no-labels": 1,
    "no-multiple-empty-lines": 1,
    "no-plusplus": 0,
    "no-return-assign": 1,
    "no-return-await": 1,
    "no-sequences": 1,
    "no-shadow": 1,
    "no-shadowed-variable": 0,
    "no-string-literal": 0,
    "no-trailing-spaces": 1,
    "object-curly-newline": 0,
    "object-literal-key-quotes": 0,
    "object-literal-sort-keys": 0,
    "ordered-imports": 0,
    "prefer-const": 1,
    quotes: [2, "single"],
    "space-before-function-paren": 0,
    "trailing-comma": 0,
    yoda: 1,
  },
}];
