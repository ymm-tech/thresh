import Thresh, { ui } from 'thresh-lib'
import { widgetList, apiList, extraPages } from './config'
import HomePage from './pages/homePage'

// 注册默认页面
Thresh.registerPage('homePage', () => HomePage, { isDefault: true })
// 注册其他页面
widgetList.concat(apiList, extraPages).forEach(({ pageName, pageBuilder, useInject }) => {
  Thresh.registerPage(pageName, pageBuilder)
  if (useInject) {
    Thresh.injectRoute({ pageName })
  }
})

// flutter 环境准备就绪
Thresh.ready = () => {
  // threshThemeProvider.loadAndUse('testTheme')
  // 设置 appBar 高度
  // appBar 默认高度 56
  ui.setAppBarHeight(ui.rpx(88))
  // 运行程序
  Thresh.runApp()
}
