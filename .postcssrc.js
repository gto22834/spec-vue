// https://github.com/michael-ciniawsky/postcss-load-config
// TOOD: 需要設置讀取 css config 的路徑
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "postcss-pxtorem": {
      propList: ['*'],
      replace: false,
    },
    "postcss-cssnext": {}
  }
}
