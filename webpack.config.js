const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// NODE_PATH=src

module.exports = {
  entry: "./src/main.js",
  devServer: {
    port: 8081,
    historyApiFallback: true,
    inline: true,
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'src/stores'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};