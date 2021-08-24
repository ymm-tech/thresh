import Thresh, { ui } from 'thresh-lib'
import threshThemeProvider from 'thresh-theme-provider'
import { widgetList, apiList, extraPages } from './config'
import HomePage from './pages/homePage'
import PreDialog from './pages/preDialog'

// 注册默认页面
Thresh.registerPage('preDialog', () => PreDialog, { isDefault: true })
Thresh.registerPage('homePage', () => HomePage, { isDefault: false })
// 注册其他页面
widgetList.concat(apiList, extraPages).forEach(({ pageName, pageBuilder, useInject }) => {
  Thresh.registerPage(pageName, pageBuilder)
  if (useInject) {
    Thresh.injectRoute({ pageName })
  }
})

Thresh.useProviders({
  propsProvider: [threshThemeProvider]
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
