import Thresh, {
  Widget,
  basicWidgets,
  ui
} from 'thresh-lib'
import Box from '../../widgets/Box'
import { Colors } from '../../config'
import { NativeView } from 'thresh-lib/src/core/basicWidget'

const {
  Page,
  AppBar,
  Text,
} = basicWidgets

export default class NativeViewDemo extends Widget <any, any> {
  render () {
    return (
      <Page
        appBar={<AppBar title="NativeView 原生视图组件" titleColor={Colors.White} backgroundColor={Colors.Primary} />}
        backgroundColor={Colors.Primary}
      >
        <Box>
          <NativeView
            gesture={'HorizontalDrag'}
            type={"thresh/native_text_view"} params={{ "text": "我是NativeTextView，测试" }} width={ui.screenWidth} height={ui.rpx(100)} backgroundColor={0xffFFFBF9} />
        </Box>
      </Page>
    )
  }
}
