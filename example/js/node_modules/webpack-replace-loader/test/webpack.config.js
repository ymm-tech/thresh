const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /index\.js$/,
        loader: 'webpack-replace-loader',
        options: {
          arr: [
            {search: '<a class__', replace: '替换成功1'},
            {search: '.a /bcc .g', replace: '替换成功2'},
            {search: '[.a]', replace: '替换成功3'},
            {search: '--{a-x}', replace: '替换成功4'},
            {search: '({[list]})', replace: '替换成功5'},
            {search: '/$/abb^', replace: '替换成功6'},
            {search: '<c><d></>', replace: '替换成功7'},
            {search: '?+^$@><-', replace: '替换成功8'},
            {search: '\'#%"-', replace: '替换成功9'}

          ]
        }
      },
      {
        test: /index\.less$/,
        loader: 'webpack-replace-loader',
        options: {
          arr: [
            {search: 'color: red', replace: 'color: green'}
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'webpack-replace-loader',
        options: {
          arr: [
            {search: 'span', replace: 'div'},
            {
              search: '$DOM',
              replace: `
                <span class="box">
                  <span class="text">看到我就代表替换 HTML 成功 ( successful ) </span>
                </span>
              `
            }
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        loader: 'url-loader',
        query: {
          limit: 200,
          name: 'images/[hash:5].[ext]'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
};

module.exports = config;
