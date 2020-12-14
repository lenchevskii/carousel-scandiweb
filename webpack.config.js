const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Webpack = require('webpack')

module.exports = {
  entry: '/src/index.js',
  // context: path.resolve(__dirname),
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index_bundle.js'
  },
  // resolve: {
  //   alias: {
  //     'components': path.resolve(__dirname, "./src/app/")
  //   }
  // },
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
        // loader: "css-loader",
        // options: {
        //   modules: {
        //     compileType: "module",
        //     mode: "local",
        //     auto: true,
        //     exportGlobals: true,
        //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
        //     localIdentContext: path.resolve(__dirname, "src/app"),
        //     localIdentHashPrefix: "my-custom-hash",
        //     namedExport: true,
        //     exportLocalsConvention: "camelCase",
        //     exportOnlyLocals: false
        //   }
        // }
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
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           "postcss-preset-env",
          //           {
          //             modules: true
          //           }
          //         ]
          //       ]
          //     }
          //   }
          // }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new MiniCssExtractPlugin(),
    new Webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    })
  ],
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  }
}