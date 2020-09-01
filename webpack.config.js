const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = (env) => {
  const isDevelopment = env.NODE_ENV === "development";

  return {
    mode: env.NODE_ENV,
    devtool: isDevelopment ? 'source-map' : '',
    entry: "./src/index.tsx",
    output: {
      path: isDevelopment ? path.resolve(__dirname, "dist") : path.resolve(__dirname, "prod"),
      filename: isDevelopment ? "js/[name].js" : "js/[name].[hash:5].js",
    },
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
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
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? 'css/[name].css' : 'css/[name].[hash:5].css',
      }),
    ],
  };
};
