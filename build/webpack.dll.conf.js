const path = require("path")
const webpack = require("webpack")
const vendors = [
    'vue/dist/vue.esm.js',
    'vue-router',
    'vue-cookies',
    'vue-lazyload',
    "ant-design-vue",
]
module.exports = {
  // 你想要打包的模块的数组
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, './'), // 打包后文件输出的位置
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    // 压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}