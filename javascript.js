module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  extends: ['eslint-config-airbnb-base', 'prettier'],
  rules: {
    /**
     * ?.()
     */
    'no-unused-expressions': 'off',
    /**
     * 依赖注入可能没用到 this
     */
    'class-methods-use-this': 'off',
    /**
     * 和 Ng 的一般编码风格冲突
     */
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'spaced-comment': 'off',
    /**
     * ts 会检查
     */
    'import/no-webpack-loader-syntax': 'off',
    /**
     * 交给 prettier 处理
     */
    'prefer-template': 'off',
    /**
     * ts 会检查
     */
    'no-unused-vars': 'off',
    /**
     * ts 会检查
     */
    'import/no-unresolved': 'off',
    /**
     * ts 会检查
     */
    'import/extensions': 'off',
    /**
     * ng 构造函数经常为空
     */
    'no-useless-constructor': 'off',
    /**
     * ng 构造函数经常为空
     */
    'no-empty-function': 'off',
    /**
     * 一般不用 require
     */
    'global-require': 'off',
    /**
     * 嵌套的三元表达式是良好的编程习惯
     */
    'no-nested-ternary': 'off',
    /**
     * 重载很常见
     */
    'no-dupe-class-members': 'off',
    /**
     * 用于 exhaustiveCheck
     */
    'no-case-declarations': 'off',
    'no-plusplus': 'off',
    'no-else-return': 'off',
    yoda: 'off',
    'no-extra-boolean-cast': 'off',
    camelcase: 'off',
    /**
     * ts 会检查全局变量
     */
    'no-undef': 'off',
    'import/no-deprecated': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    // 有额外的很正常，可能是二次依赖
    'import/no-extraneous-dependencies': 'off',
  },
};
