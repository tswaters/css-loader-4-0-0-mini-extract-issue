"use strict";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const packageJson = require("./package.json");

module.exports = (env, argv) => {
  const chunkhash = argv.mode === "production" ? ".[chunkhash]" : "";
  return {
    name: "test",
    devtool: "none",
    entry: {
      index: "./index.js",
    },
    target: "web",
    output: {
      path: path.resolve("./dist"),
      filename: `[name]${chunkhash}.js`,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".js", "css"],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                localsConvention: "camelCase",
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  };
};
