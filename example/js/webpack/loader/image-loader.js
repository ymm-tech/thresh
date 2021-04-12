const os = require('os')
const path = require('path')
const { readFileSync } = require('fs')
const loaderUtils = require('loader-utils')

const rootPath = path.resolve(__dirname, '../../')
const networkInterfaces = os.networkInterfaces()
let internalIp = '127.0.0.1'
if (networkInterfaces && networkInterfaces.en0) {
  for (let i in networkInterfaces.en0) {
    const interface = networkInterfaces.en0[i]
    if (interface.family === 'IPv6') continue
    internalIp = interface.address
  }
}

module.exports = function() {
  const loaderOptions = loaderUtils.getOptions(this)
  const devMode = loaderOptions.localImageUseHttpRequestEnvs.indexOf(process.env.NODE_ENV) > -1
  const imagePath = this.resource

  let src = imagePath.split(path.join('/', 'src'))[1]
  if (!src) throw new Error('Static assets must include by "src" folder.')
  if (!devMode) {
    this.emitFile(src, readFileSync(imagePath))
  } else {
    src = imagePath.split(rootPath)[1]
  }

  return `export default '${
    !devMode
      ? src
      : `http://${loaderOptions.imageHost || internalIp}:${loaderOptions.port || '12345'}${src}`
  }'`
}
