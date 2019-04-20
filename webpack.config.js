const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js",
    publicPath: "/"
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader", "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader", "css-loader", "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./public/assets/",
              name: "[name].[ext]",
            },
          },
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        }
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
