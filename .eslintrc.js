module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: [
    'vue',
    'prettier'
  ],
  // ここにカスタムルールを追加します。
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    semi: [2, 'never'],
    'vue/html-indent': ['error', 2],
    'no-console': 'off', // console.log();OK
    'no-unused-vars': 'off', // 使っていない変数あってもOK
    'vue/html-self-closing': 'off', // imgタグのようにタグが１つで完結してもOK
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore', // aタグの羅列などで変な風にならないように追記
      },
    ],
  },
}
