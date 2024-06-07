export default {
  plugins: ['stylelint-prettier', '@stylistic/stylelint-plugin'],

  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    // standard 规则集合的 less 版本
    'stylelint-config-standard-less',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // vue 规则
    'stylelint-config-recommended-vue',
    // 接入 Prettier 规则
    'stylelint-prettier/recommended'
  ],
  // 注册 stylelint 的 prettier 插件
  // 继承一系列规则集合
  overrides: [
    {
      files: ['** /*.{html,vue}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less'
    }
  ],
  // 配置 rules
  rules: {
    // 不允许无效color名
    'color-no-invalid-hex': [true, { message: '不允许无效color名' }],
    // 禁止未知伪元素选择器
    'selector-pseudo-element-no-unknown': [
      true,
      { message: '禁止未知伪元素选择器' }
    ],
    // 禁止空注释
    'comment-no-empty': [true, { message: '禁止空注释' }],
    // 只允许一行空格
    '@stylistic/max-empty-lines': 1,
    '@stylistic/no-missing-end-of-source-newline': null,
    // 禁止额外的分号
    '@stylistic/no-extra-semicolons': true,
    //  禁止未知的动画
    'no-unknown-animations': true,
    // 限制类与类之间的空行数
    '@stylistic/selector-max-empty-lines': 1,
    // 区块结束花括号前不允许空行
    '@stylistic/block-closing-brace-empty-line-before': 'never',
    // 属性冒号后面需要空格
    '@stylistic/declaration-colon-space-after': 'always',
    // 属性冒号前面不要空格
    '@stylistic/declaration-colon-space-before': 'never',
    // 开启 Prettier 自动格式化功能
    'prettier/prettier': true
  }
}
