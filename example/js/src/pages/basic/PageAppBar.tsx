import Thresh, { basicWidgets } from 'thresh-lib'
import { Colors } from '../../config'
import Box from '../../widgets/Box'
import Center from '../../widgets/Center'

const { Page, AppBar, Container, Text, Icon } = basicWidgets

export default class PageAppBar extends Thresh.Widget <any, any> {
  widgetDidMount () {
    Thresh.pageDidShow()
  }
  render () {
    return (
      <Page
        backgroundColor={Colors.Primary}
        appBar={
          <AppBar
            title="自定义 AppBar"
            titleColor={Colors.White}
            titleSize={18}
            backgroundColor={Colors.Primary}
            leading={
              <Center>
                <Center width={30} height={30} borderRadius={15} backgroundColor={Colors.White} onTap={() => { Thresh.popPage() }}>
                  <Icon type="arrow_back" color={Colors.Primary} />
                </Center>
              </Center>
            }
            buttons={[
              <Text color={Colors.White} size={14} onTap={() => { Thresh.popPage() }}>返回</Text>,
              <Center width={30} height={30} borderRadius={15} margin={{ left: 10, right: 10 }} onTap={() => { Thresh.popPage() }}>
                <Icon type="bookmark" color={Colors.White} size={18} />
              </Center>
            ]}
          />
        }
      >
        <Box>
          <Text color={Colors.Darkgray}>
            本页面的根容器为 Page 组件。
          </Text>
        </Box>
        <Box>
          <Text color={Colors.Darkgray}>
            通过自定义 AppBar 组件的标题、返回按钮和右侧按钮列表，实现了点击返回按钮和右侧按钮都可以返回到上级页面的功能。
          </Text>
        </Box>
      </Page>
    )
  }
}
