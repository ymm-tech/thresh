module.exports = {
  server: {
    host: '0.0.0.0',
    // 通过 ip 远程调试需要将 imageProxyHost 修改为当前 ip
    // 否则本地图片将无法显示
    imageProxyHost: '0.0.0.0',
    port: 12345
  }
}
