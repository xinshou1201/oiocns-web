module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    //0--不启用； 1--出现问题会有警告； 2--出现问题会报错
    'react/jsx-first-prop-new-line': 'error',
    indent: [
      0,
      2,
      {
        SwitchCase: 1, // （默认：0）指定 switch-case 语句的缩进级别
      },
    ], // 强制使用一致的缩进
    eqeqeq: [2, 'always'], // 要求使用 === 和 !==
    eqeqeq: ['off'], // 关闭要求使用 === he !==
    // semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
    quotes: [1, 'single'], // 强制使用一致的反勾号、双引号或单引号
    'no-console': 'off',
    camelcase: 2, //强制驼峰法命名
  },
};
