const webpack = require("webpack");
module.exports = {
  // 基本路径
  publicPath: "/tree-edit-drag/",
  // 输出文件目录
  outputDir: "docs",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
