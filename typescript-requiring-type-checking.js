module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'deprecation'],
  rules: {
    '@typescript-eslint/await-thenable': 'error',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/naming-convention': 'off',
    /**
     * This rule has some overlap with restrict-plus-operands and restrict-template-expressions.
     */
    '@typescript-eslint/no-base-to-string': 'off',

    '@typescript-eslint/no-confusing-void-expression': 'off',
    /**
     * 禁止对 Promise 不使用 then
     */
    '@typescript-eslint/no-floating-promises': [
      'error',
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    /**
     * 禁止对 array 使用 for in 循环
     */
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    /**
     * 避免错误的使用 Promise
     */
    '@typescript-eslint/no-misused-promises': 'error',

    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     */
    '@typescript-eslint/no-throw-literal': 'error',
    /**
     * 当其只可能是 boolean 时候，没必要进行 === true
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    /**
     * 被下一条规则覆盖了
     */
    'no-constant-condition': 'off',
    /**
     * 条件表达式禁止是永远为真（或永远为假）的
     */
    '@typescript-eslint/no-unnecessary-condition': [
      'off', // 关闭的原因是，需要考虑 tagged union 扩展的问题
      {
        ignoreRhs: false,
        allowConstantLoopConditions: true,
        checkArrayPredicates: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-type-arguments': 'off', // TODO: 研究是否可以开启
    /**
     * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /**
     * 禁止无用的类型断言
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    /**
     * 如果禁用了，那些老代码就都得重写了
     */
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',

    /**
     * 使用 includes 而不是 indexOf
     */
    '@typescript-eslint/prefer-includes': 'error',

    /**
     * 使用 ?? 替代 ||
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    /**
     * 暂时没法用
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    /**
     * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
     */
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    /**
     * 使用 RegExp#exec 而不是 String#match
     */
    '@typescript-eslint/prefer-regexp-exec': 'off',
    /**
     * 使用 String#startsWith 而不是其他方式
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    /**
     * 返回值是 Promise 的函数必须是 async 函数
     */
    '@typescript-eslint/promise-function-async': 'off',
    /**
     * 使用 sort 时必须传入比较函数
     */
    '@typescript-eslint/require-array-sort-compare': 'error',

    /**
     * 使用加号时，两者必须同为数字或同为字符串
     */
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        checkCompoundAssignments: true,
      },
    ],
    /**
     * 模版字符串中的变量类型必须是字符串
     */
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowNullable: false,
      },
    ],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off', // TODO: 调查是否可以开启
    /**
     * async 函数在 try catch 中遇到 promise 返回值，必须 await
     */
    '@typescript-eslint/return-await': 'error',
    /**
     * 条件判断必须传入布尔值
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/strict-boolean-expressions': [
    //   'error',
    //   {
    //     allowNullable: false,
    //     allowSafe: false,
    //     ignoreRhs: true,
    //   },
    // ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    /**
     * 方法调用时需要绑定到正确的 this 上
     */
    '@typescript-eslint/unbound-method': 'error',

    'deprecation/deprecation': 'error',
  },
};
