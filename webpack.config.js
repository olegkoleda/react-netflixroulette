const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV === "development";

  return {
    mode: env.NODE_ENV,
    devtool: isDevelopment ? 'eval-source-map' : '',
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "js/[name].js" : "js/[name].[hash:5].js",
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: isDevelopment },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:5].css',
      }),
    ],
  };
};
