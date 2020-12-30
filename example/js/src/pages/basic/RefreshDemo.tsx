import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'
import Center from '../../widgets/Center'

const { Page, AppBar, Refresh } = basicWidgets

export default class RefreshDemo extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Refresh 属性指示器组件" />
        }
      >
        <Title title="默认样式" />
        <Box>
          <Center width={Box.width}>
            <Refresh />
          </Center>
        </Box>

        <Title title="修改主色" />
        <Box>
          <Center width={Box.width}>
            <Refresh color={Colors.Red} />
          </Center>
        </Box>

        <Title title="添加辅色" />
        <Box>
          <Center width={Box.width}>
            <Refresh color={Colors.Red} secondColor={Colors.Pagebg} />
          </Center>
        </Box>

        <Title title="改变大小" />
        <Box>
          <Center width={Box.width}>
            <Refresh size={40} />
          </Center>
        </Box>

        <Title title="改变粗细" />
        <Box>
          <Center width={Box.width}>
            <Refresh strokeWidth={2} />
          </Center>
        </Box>
      </Page>
    )
  }
}
