import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          legacyDecorators: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        },
      },
    },
    rules: {
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-inferrable-types': 1,
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/prefer-as-const': 0,
      'array-type': 0,
      'arrow-parens': 0,
      'curly': 0,
      'default-case-last': 1,
      'import/export': 0,
      'import/no-deprecated': 2,
      'import/no-named-as-default': 0,
      'import/order': 1,
      'interface-over-type-literal': 0,
      'max-line-length': 0,
      'no-async-promise-executor': 1,
      'no-await-in-loop': 0,
      'no-confusing-arrow': 1,
      'no-console': 0,
      'no-eval': 2,
      'no-implied-eval': 2,
      'no-labels': 1,
      'no-multiple-empty-lines': 1,
      'no-plusplus': 0,
      'no-return-assign': 1,
      'no-return-await': 1,
      'no-sequences': 1,
      'no-shadow': 1,
      'no-shadowed-variable': 0,
      'no-string-literal': 0,
      'no-trailing-spaces': 1,
      'object-curly-newline': 0,
      'object-literal-key-quotes': 0,
      'object-literal-sort-keys': 0,
      'ordered-imports': 0,
      'prefer-const': 1,
      'quotes': [2, 'single'],
      'space-before-function-paren': 0,
      'trailing-comma': 0,
      'yoda': 1,
    },
  }
);
