/* eslint-disable no-undef */
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
    open: 'Brave Browser',
    compress: true,
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/
      },
    ]
  },
  output: {
    filename: "transformed.js",
    path: __dirname + "/build"
  },
  plugins: [HtmlWebpackPluginConfig]
};