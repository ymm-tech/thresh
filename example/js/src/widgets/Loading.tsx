import Thresh, { basicWidgets, ui } from 'thresh-lib'
import Center from './Center'

const { Text, Icon } = basicWidgets

interface ShowLoadingParams {
  message?: string,
  overTime?: number
}

export default class Loading {
  /**
   * 
   * @param message loading提示信息
   * @param overTime loading超时自动关闭的时间，默认 10000ms，设为 0 则不会主动关闭
   */
  static show (params: ShowLoadingParams = {}) {
    const { message = '', overTime = 10000 } = params
    Loading.index++
    const name = Loading.showName
    Thresh.showToast(Loading.render(message), {
      name,
      stayTime: 0,
      position: { left: 0, top: 0 }
    })
    if (overTime) {
      const id = setTimeout(() => {
        Loading.hide()
      }, overTime)
      Loading.timers[name] = id
    }
  }
  static hide () {
    const name = Loading.showName
    Thresh.hideToast(name)
    const id = Loading.timers[name]
    if (id) {
      clearTimeout(id)
      delete Loading.timers[name]
    }
    Loading.index--
  }
  static hideAll () {
    while (Loading.index) {
      Loading.hide()
    }
  }

  private static index = 0
  private static get showName () {
    return `loading#${Loading.index}`
  }
  private static timers = {}
  private static render (message?: string) {
    return (
      <Center backgroundColor={0x90000000} width={ui.screenWidth} height={ui.screenHeight}>
        <Center backgroundColor={0xffffffff} borderRadius={ui.rpx(8)} padding={ui.rpx(40)}>
          <Icon type="loading" size={ui.rpx(40)} />
          {
            message &&
            <Text margin={{top: ui.rpx(20)}} color={0xff000000}>{message}</Text>
          }
        </Center>
      </Center>
    )
  }
}
