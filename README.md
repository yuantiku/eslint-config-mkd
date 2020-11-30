# eslint-config-mkd

yarn add --dev @monkey-design/eslint-config-mkd @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser eslint-plugin-rxjs eslint-plugin-rxjs-angular eslint-plugin-prettier prettier

Add `"lint": "eslint src/ --ext .ts,.js,.cjs,.mjs,.component.html",` in your package.json scripts

Add config file `.eslintrc.cjs`.

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    jasmine: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      extends: ['@conan/eslint-config-conan/javascript'],
      rules: {},
    },
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
      extends: [
        '@conan/eslint-config-conan/javascript',
        '@conan/eslint-config-conan/typescript',
        '@conan/eslint-config-conan/typescript-requiring-type-checking',
        'plugin:@angular-eslint/all',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:rxjs/recommended',
      ],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'app', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'app', style: 'kebab-case' },
        ],
        '@angular-eslint/prefer-on-push-component-change-detection': 'off',
        'rxjs/no-implicit-any-catch': 'off',
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'], // <-- Same tsconfig.json must be referenced
      },
    },
  },
};
```
