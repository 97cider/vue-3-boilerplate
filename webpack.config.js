const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const htmlWebpackPlugin  = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");
const path = require("path");

require('dotenv').config()

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          esModule: false,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
        title: process.env.TITLE,
      }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: "@vue/runtime-dom"
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: process.env.PORT,
  },
};