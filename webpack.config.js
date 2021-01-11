const HtmlPlugin  = require('html-webpack-plugin')
const copyPlugin  = require('copy-webpack-plugin')
const webpack     = require('webpack')
const path        = require('path')

module.exports = {
  entry: {
    client: '/client/index.js'
  },
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: '[name].[contenthash].js'
  },
  devServer: {
    inline: true,
    port: 8001,
    transportMode: 'ws'
    // injectClient: false
    // publicPath: path.resolve('./bundle'),
    // contentBase: path.resolve('./scanditask')
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     name: '[path][name].[ext]',
          //     bypassOnDebug: true, // webpack@1.x
          //     disable: true, // webpack@2.x and newer
          //     webp: {
          //       quality: 75
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/react", "@babel/env"]
        }
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './client/public/index.html'
    }),
    new webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    }),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'client/public/favicon.png'),
          to: path.resolve(__dirname, 'bundle/favicon.png')
        },
        {
          from: path.resolve(__dirname, 'node_modules/focus-visible/dist/focus-visible.min.js'),
          to: path.resolve(__dirname, 'bundle/node_modules/focus-visible/dist/focus-visible.min.js')
        }
      ]
    })
  ]
  // performance: {
  //   maxEntrypointSize: 5120000,
  //   maxAssetSize: 5120000
  // }
  // experiments: {
  //   topLevelAwait: true
  // }
}