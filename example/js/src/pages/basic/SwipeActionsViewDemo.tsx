import Thresh, { basicWidgets, ui } from 'thresh-lib'
import Box from '../../widgets/Box'
import Title from '../../widgets/Title'
import { Colors } from '../../config'
import Center from '../../widgets/Center'

const {
  Page,
  AppBar,
  SwipeActionsView,
  Container,
  Text,
  Button,
} = basicWidgets

export default class SwipeActionsViewDemo extends Thresh.Widget <any, any> {
  $actions

  state = {
    isOpening: false
  }

  render () {
    const { isOpening } = this.state
    return (
      <Page
        appBar={<AppBar title="SwiperActionsView 侧滑按钮组件" />}
        backgroundColor={Colors.Pagebg}
      >
        <Title title={`侧滑按钮组件状态: ${isOpening ? '开启' : '关闭'}`} />
        <Box>
          <SwipeActionsView borderRadius={5} swipeMaxDistance={ui.rpx(100)} actions={[
            <Center width={ui.rpx(100)} backgroundColor={Colors.Red}>
              <Text color={Colors.White}>点击</Text>
              <Text color={Colors.White}>关闭</Text>
            </Center>
          ]} content={
            <Container width={Box.width} padding={30} backgroundColor={Colors.Primary} justifyContent="center">
              <Text color={Colors.White}>向左侧横向滑动显示按钮</Text>
            </Container>
          } ref={ref => {
            if (!this.$actions) this.$actions = ref
          }} onActionsOpen={() => {
            this.setState({ isOpening: true })
          }} onActionsClose={() => {
            this.setState({ isOpening: false })
          }} />
        </Box>

        <Title title="操作按钮" />
        <Box>
          <Button borderRadius={5} backgroundColor={Colors.Primary} height={40} margin={{ bottom: 10 }} onTap={() => {
            if (this.$actions) {
              this.$actions.openActions()
            }
          }}>
            <Text color={Colors.White}>打开操作按钮</Text>
          </Button>
          <Button borderRadius={5} backgroundColor={Colors.Primary} height={40} onTap={() => {
            if (this.$actions) {
              this.$actions.closeActions()
            }
          }}>
            <Text color={Colors.White}>关闭操作按钮</Text>
          </Button>
        </Box>
      </Page>
    )
  }
}
