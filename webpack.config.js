const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jpg$/,
        include: path.resolve(__dirname, "flags"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "flags",
            publicPath: "flags",
          },
        },
      },
    ],
  },
};
