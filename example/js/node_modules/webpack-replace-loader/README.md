# webpack-replace-loader
> 一个 webpack 打包时用来替换字符串的 webpack-loader 。

[中文文档](https://github.com/beautifulBoys/webpack-replace-loader)　　 [English document](https://github.com/beautifulBoys/webpack-replace-loader/tree/master/docs)

## 使用场景举例
1 . 在使用 webpack 项目打包的时候，用来将开发环境的请求 URL 替换为 生产环境的 URL 。

2 . 项目统一查找调整页面配色样式 `color` , 将 `#00ff00` 替换为 `#ff0700` 。

3 . 大型项目中，依照打包策略在相关文件中写入不同内容。


## 安装

将 `webpack-replace-loader` 作为依赖安装到项目:
```shell
 npm install webpack-replace-loader --save-dev
```
## 配置使用
配置webpack打包策略：
```js
module: {
  loaders: [
    ...
    {
      test: /test\.js$/,
      loader: 'webpack-replace-loader',
      options: {
        arr: [
          {search: '$BaseUrl', replace: 'https://test.baiduu.com', attr: 'g'},
          {search: '$Title', replace: '社会主义核心价值观', attr: 'g'}
        ]
      }
    }
    ...
  ]
}
```

## 示例
 test.js :
 ```js
  var title = '$Title';
  function showTitle () {
    document.title = title;
  }
 ```
 通过以上 `webpack` 配置打包后生成 test.js ：

```js
var title = '社会主义核心价值观';
function showTitle() {
  document.title = title;
}
```
在上例中，`$Title` 的作用仅仅是提供一个查找字符串的 锚点 ，并没有实际意义。

## Webpack 的其他配置方法
1 . 将 a.js 中的 BaseUrl 只替换第一个为 https://www.baidu.com/api/ ; Title 全部替换为 " 百度开放接口 " 。

2 . 将 b.js 中的 Location 全部替换为 " BeiJing " 。

```js
module: {
  loaders: [
    ...
    {
      test: /a\.js$/,
      loader: 'webpack-replace-loader',
      options: {
        arr: [
          {search: 'BaseUrl', replace: 'https://www.baidu.com/api/'},
          {search: 'Title', replace: '百度开放接口', attr: 'g'}
        ]
      }
    },
    {
      test: /b\.js$/,
      loader: 'webpack-replace-loader',
      options: {
        search: 'Location',
        replace: 'https://www.baidu.com/api/',
        attr: 'g'
      }
    }
    ...
  ]
}
```
只要你的替换锚点不相同，你也可以合并写：

```js
module: {
  loaders: [
    ...
    {
      test: /(a\.js|b.js|c\.js)$/,
      loader: 'webpack-replace-loader',
      options: {
        arr: [
          {search: 'BaseUrl', replace: 'https://www.baidu.com/api/'},
          {search: 'Title', replace: '百度开放接口', attr: 'g'}
          {search: 'Location', replace: 'BeiJing', attr: 'g'}
        ]
      }
    }
    ...
  ]
}
```
包括 .css 文件，.less 文件等 ： 将`color: red;` 修改为 `color: #0cff00;`
```css
.test {
  color: red;
}
```
配置：
```js
options: {
  search: 'color: red;',
  replace: 'color: #0cff00;',
  attr: 'g'
}
```
替换后：
```css
.test {
  color: #0cff00;
}
```

 将 a.hml 文件 的 `div` 标签换为 `span` 标签。将 class `text` 换为 `box` :

```html
<span>$DOM</span>
```
配置如下：
```js
options: {
  arr: [
    {search: 'span', replace: 'div', attr: 'g'},
    {search: '$DOM', replace: `
      <span class="box">
        <span class="text">社会主义</span>
      </span>
    `}
  ]
}
```

替换后：
```html
<div>
  <span class="box">
    <span class="text">社会主义</span>
  </span>
</div>
```

## 测试
在 test 目录下进行执行：
```shell
 npm install
```
```shell
 npm run test
```
用浏览器打开：test/dist/index.html。

## 说明
1.2版本后，已做全字符转义，包含但不限于下列情况均可替换。
```js
search: '<a class__';
search: '.a /bcc .g';
search: '[.a]';
search: '--{a-x}';
search: '({[list]})';
search: '/$/abb^';
search: '<c><d></>';
search: '?+^$@><-';
```

<img src="https://raw.githubusercontent.com/beautifulBoys/webpack-replace-loader/master/test/test.png">
