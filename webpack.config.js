const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // {
      //   test: /\.(png|gif|jpg|svg|webp)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: { name: 'assets/[hash].[ext]' },
      //     },
      //   ],
      // },

      {
        test: /\.(png|gif|jpg|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   mimetype: 'image/png',
            // },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
      template: './Public/index.html', //Dirección donde se encuentra el template principal
      filename: './index.html', //El nombre que tendrá el archivo
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        // relative path is from src
        { from: './src/statics/favicon.png' }, // <- your path to favicon
      ],
    }),
  ],
};

module.exports = config;
