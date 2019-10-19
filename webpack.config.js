const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  devServer: {
    hot: true,
    open: true,
    compress: true,
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: "transformed.js",
    path: __dirname + "/build"
  },
  plugins: [HtmlWebpackPluginConfig]
};