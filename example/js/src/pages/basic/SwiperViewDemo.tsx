import Thresh, {
  ui,
  basicWidgets
} from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'
import Center from '../../widgets/Center'

const {
  Page,
  AppBar,
  SwiperView,
  Text,
} = basicWidgets

export default class SwiperViewDemo extends Thresh.Widget <any, any> {

  renderContent () {
    return (new Array(20)).fill(1).map((item, index) => (
      <Center backgroundColor={Colors.Primary} margin={5}>
        <Text color={Colors.White} weight="bolder">{index}</Text>
      </Center>
    ))
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="SwiperView 滑动组件" />}
        backgroundColor={Colors.Pagebg}
      >
        <Title title="横向滑动" />
        <Box>
          <SwiperView width={Box.width} height={ui.screenHeight / 4} viewportFraction={0.9}>
            {this.renderContent()}
          </SwiperView>
        </Box>

        <Title title="竖向滑动" />
        <Box>
          <SwiperView width={Box.width} height={ui.screenHeight / 4} row={false}>
            {this.renderContent()}
          </SwiperView>
        </Box>
      </Page>
    )
  }
}
