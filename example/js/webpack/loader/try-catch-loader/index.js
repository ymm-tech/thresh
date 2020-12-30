const babel = require('@babel/core')
const loaderUtils = require("loader-utils")
const tryCatchWrapper = require('./plugin').default

module.exports = function (source, inputMap) {
  let fileName = ''
  if (this.resource.indexOf('/node_modules') > -1) {
    fileName = this.resource.split('/node_modules')[1]
  } else {
    fileName = this.resource.split('/src')[1]
  }
  const loaderOptions = loaderUtils.getOptions(this)
  const transOpts = {
    plugins: [
      [
        tryCatchWrapper,
        {
          reportError: loaderOptions.reporter,
          rethrow: loaderOptions.rethrow,
          noCatchFuncNames: loaderOptions.noCatchFuncNames || [],
          fileName
        }
      ]
    ]
  }
  try {
    const result = babel.transform(source, transOpts)
    this.callback(null, result.code, result.map)
  } catch (e) {
    throw e
  }
}