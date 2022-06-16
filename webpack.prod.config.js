const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: ['regenerator-runtime/runtime', './src/index.jsx'],
  output: {
    filename: 'js/[name].[contenthash].js',
    path: resolve(__dirname, 'server/client'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    // minimizer: [new TerserJSPlugin({ parallel: true })]
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 51200,
    maxAssetSize: 51200,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // {
          //   loader: MiniCSSExtractPlugin.loader,
          //   options: {
          //     publicPath: '../',
          //   },
          // },
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: `${__dirname}/src/img`,
    //       to: 'images',
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin(),
  ],
}

module.exports = config
