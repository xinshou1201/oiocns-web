module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    overrides: [
      {
        files: ['**/*.d.ts','**/*.tsx'],
        rules: {
          //解决ts中，本身是可以有空的构造函数的误判问题 START
          'no-useless-constructor': 'off',
          '@typescript-eslint/no-useless-constructor': 'error',
          'no-unused-vars': 'error',
          '@typescript-eslint/no-unused-vars': 'error',
          'no-empty-function': 'off',
          '@typescript-eslint/no-empty-function': 'error',
          //解决导出类型时，no-undef报错问题
          'no-undef': 'off',
          'import/prefer-default-export': 'off',
        },
      },
    ],
  },
};
