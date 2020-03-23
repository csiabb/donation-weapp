// http://eslint.org/docs/user-guide/configuring

// noinspection JSUnresolvedVariable
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': 0, // allow paren-less arrow functions
    'generator-star-spacing': 0, // allow async-await
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    "space-before-function-paren": 0, // 方法名称后面不要空格
    'semi': 0, // 不检查分号 // 'semi': ["error", "always"], // 语句结束必须使用分号
    'quotes': 0, // 引号类型 `` "" '' // "quotes": [1, "single"],//引号类型 `` "" ''
    'no-trailing-spaces': ["error", {"skipBlankLines": true}], // 允许空行
    'padded-blocks': 0, // 关闭区块内空行检查
    'key-spacing': 0,  // 关闭值前后的空格检查
    'comma-spacing': 0, // 关闭逗号后面的空格检查
    'spaced-comment': 0, // 关闭注释符号后面的空格检查
    'comma-dangle':0,  // 数组结尾逗号检查
    'no-multiple-empty-lines':0  // 关闭空行检查
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
};
