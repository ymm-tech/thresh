const path = require('path')
const { readFileSync } = require('fs')
const loaderUtils = require("loader-utils")

module.exports = function() {
  const loaderOptions = loaderUtils.getOptions(this)
  const imagePath = this.resource
  const src = imagePath.split(path.join('/', 'src'))[1]
  if (!src) throw new Error('Static assets must include by "src" folder.')
  this.emitFile(
    src,
    readFileSync(imagePath)
  )
  return `export default '${
    loaderOptions.localImageUseHttpRequestEnvs.indexOf(process.env.NODE_ENV) === -1    
      ? src
      : `http://${loaderOptions.imageHost || '127.0.0.1'}:${loaderOptions.port || '8000'}${src}`
  }'`
}
