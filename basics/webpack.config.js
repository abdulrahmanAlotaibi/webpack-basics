const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [{ test: /\.svg$/, use: "svg-inline-loader" }],
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    // rules: [{ test: /\.(js)$/, use: "babel-loader" }],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  // mode:'production'
  mode: process.env.NODE.ENV === "production" ? "production" : "development",
};
