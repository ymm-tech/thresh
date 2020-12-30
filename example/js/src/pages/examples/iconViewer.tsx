import Thresh, {
  Widget,
  Util,
  ui,
  basicWidgets
} from 'thresh-lib'
import Center from '../../widgets/Center'
import { IconType } from 'thresh-lib/src/types/widget'

const {
  Page,
  AppBar,
  ScrollView,
  Container,
  Text,
  Icon,
} = basicWidgets

export default class IconViewer extends Widget <any, any> {
  icons: IconType[] = ['loading', 'apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'check', 'check_circle', 'check_circle_outline', 'add', 'add_circle', 'add_circle_outline', 'close', 'cancel', 'create', 'chevron_left', 'chevron_right', 'aexpand_lesspps', 'expand_more', 'refresh', 'fullscreen', 'fullscreen_exit', 'more_horiz', 'more_vert', 'unfold_less', 'unfold_more', 'control_point', 'crop', 'adjust', 'camera', 'camera_alt', 'image', 'broken_image', 'phone_iphone', 'phone_android', 'watch', 'tv', 'headset', 'computer', 'cloud_done', 'cloud_download', 'cloud_upload', 'cloud_off', 'folder', 'title', 'insert_link', 'insert_chart', 'format_quote', 'format_list_bulleted', 'format_list_numbered', 'attach_file', 'attach_money', 'access_alarms', 'account_box', 'account_circle', 'bookmark', 'bookmark_border', 'fingerprint', 'gif', 'home', 'info', 'info_outline']

  render () {
    return (
      <Page
        appBar={<AppBar title="图标示例" />}
      >
        <ScrollView padding={{ bottom: ui.bottomBarHeight }}>
          <Text margin={ui.rpx(20)}>Tip: Loading 图标不支持修改颜色!</Text>
          <Container
            row
            wrap
            width={ui.screenWidth}
          >
            {
              this.icons.map(icon => (
                <Center padding={ui.rpx(20)} width={ui.screenWidth / 3}>
                  <Icon type={icon} size={ui.rpx(40)} />
                  <Text size={ui.rpx(20)} margin={{ top: ui.rpx(10) }}>{icon}</Text>
                </Center>
              ))
            }
          </Container>
        </ScrollView>
      </Page>
    )
  }
}
