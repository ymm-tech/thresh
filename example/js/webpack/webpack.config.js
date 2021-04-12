const path = require('path')
const config = require('./config')
const packageInfo = require('../package.json')

const DEV_ENV = 'development'
const isDev = process.env.NODE_ENV === DEV_ENV
const hotUpdate = !!process.env.HOT_UPDATE
const outputDir = path.resolve(__dirname, '../dist')
function formatString (value) {
  if (value === undefined || value === null) return ''
  return "'" + value.toString() + "'"
}

module.exports = {
  entry: './src/index.ts',
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  mode: hotUpdate ? 'development' : 'none',
  resolve: {
    // 本地通过 npm link 链接依赖库时需要去除 alias
    alias: {
      'thresh-lib': path.resolve(__dirname, '../node_modules/thresh-lib'),
    },
    extensions: [ '.tsx', '.jsx', '.ts', '.js' ]
  },
  resolveLoader:{
    modules: [ 'webpack/loader', 'node_modules' ],
  },
  module: {
    rules: [
      {
        test: /\.(jpg)|(jpeg)|(png)|(gif)$/,
        use: {
          loader: 'image-loader',
          options: {
            localImageUseHttpRequestEnvs: [ DEV_ENV ],
            imageHost: config.server.imageProxyHost,
            port: config.server.port
          }
        }
      },
      {
        test:/\.(js)|(jsx)|(ts)|(tsx)$/,
        // 脚本文件包含目录
        // 开发模式下不区分
        include: !isDev ? [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/thresh-lib'),
        ] : void 0,
        use: [
          {
            loader: 'webpack-replace-loader',
            options: {
              arr: [
                // Thresh 页面名
                { search: '__BIZ_NAME__', replace: formatString(packageInfo.name) },
                // 本地 bundle 目录
                { search: '__LOCAL_BUNDLE_DIR__', replace: formatString(outputDir) },
                // 打包环境
                { search: 'process.env.NODE_ENV', replace: formatString(process.env.NODE_ENV) },
                // ios9 及以下对 use strict 解析存在异常
                // 需要移除
                { search: '"use strict";', replace: '' }
              ]
            }
          },
          {
            loader: 'try-catch-loader',
            options: {
              rethrow: true,
              reporter: '__reportError__',
              noCatchFuncNames: [ 'request' ]
            }
          },
          {
            loader:'babel-loader',
            options: {
              compact: false,
              presets: [
                "@babel/preset-react",
                [
                  "@babel/preset-env",
                  {
                    modules: "commonjs"
                  }
                ]
              ],
              // 兼容 ios9 及以下
              // 开发模式不需要兼容
              plugins: !isDev ? [
                [
                  "@babel/plugin-transform-runtime",
                  {
                    "corejs": 3,
                  }
                ]
              ] : void 0
            }
          },
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    compress: true,
    host: config.server.host,
    port: config.server.port,
    inline: false,
    hotOnly: hotUpdate,
  }
}
