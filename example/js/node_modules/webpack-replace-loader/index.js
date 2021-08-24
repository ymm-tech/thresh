
var loaderUtils = require('loader-utils');

// Characters needed to escape
var escapeArray = ['\'','"', '/', '[', ']', '-', '.', '(', ')', '$', '^', '*', '+', '?', '|', '{', '}'];

function warning (num) {
  var arr = [
    '[webpack-replace-loader: Error] The configuration rule of webpack is not allowed! -> https://github.com/beautifulBoys/webpack-replace-loader',
    '[webpack-replace-loader: Error] The property "search" and "replace" is essential',
    '[webpack-replace-loader: Error] The property "arr" should be an Array.'
  ];
  throw new Error(arr[num]);
}
// The string that needs to be matched is escaped
function stringEscape (str) {

  let stringArray = str.toString().split('');

  for (let j = 0; j < stringArray.length; j++) {
    for (let i = 0; i < escapeArray.length; i++) {

      if (stringArray[j] === escapeArray[i]) {
        stringArray[j] = '\\' + escapeArray[i];
      }

    }
  }

  return stringArray.join('');
}
function replaceFunc (configArray, source) {
  for (let i = 0; i < configArray.length; i++) {
    source = source.replace(new RegExp(stringEscape(configArray[i].search), configArray[i].attr), configArray[i].replace);
  }
  return source;
}

module.exports = function (source, map) {
  this.cacheable();
  var options = loaderUtils.getOptions(this);
  let configArray = [];
  if (options.hasOwnProperty('arr')) {
    if (Array.isArray(options.arr)) {
      for (let i = 0; i < options.arr.length; i++) {
        let option = options.arr[i];
        if (option.hasOwnProperty('search') && option.hasOwnProperty('replace')) {
          configArray.push({
            search: option.search,
            replace: option.replace,
            attr: option.attr ? option.attr : ''
          });
        } else {
          warning(1);
        }
      }
    } else {
      warning(2);
    }

  } else {
    if (options.hasOwnProperty('search') && options.hasOwnProperty('replace')) { // 对象形式存在
      configArray.push({
        search: options.search,
        replace: options.replace,
        attr: options.attr ? options.attr : ''
      });
    } else {
      warning(0);
    }
  }

  source = replaceFunc(configArray, source);

  this.callback(null, source, map);
  return source;
};
