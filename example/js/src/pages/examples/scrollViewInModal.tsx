import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import Center from '../../widgets/Center'
import { IconType } from 'thresh-lib/src/types/widget'

const {
  Page,
  AppBar,
  ScrollView,
  Button,
  Container,
  Text,
  Icon,
} = basicWidgets

export default class ScrollViewInModal extends Widget <any, any> {
  icons: IconType[] = ['loading', 'apps', 'arrow_back', 'arrow_back_ios', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_up', 'arrow_forward', 'arrow_forward_ios', 'arrow_left', 'arrow_right', 'arrow_upward', 'check', 'check_circle', 'check_circle_outline', 'add', 'add_circle', 'add_circle_outline', 'close', 'cancel', 'create', 'chevron_left', 'chevron_right', 'aexpand_lesspps', 'expand_more', 'refresh', 'fullscreen', 'fullscreen_exit', 'more_horiz', 'more_vert', 'unfold_less', 'unfold_more', 'control_point', 'crop', 'adjust', 'camera', 'camera_alt', 'image', 'broken_image', 'phone_iphone', 'phone_android', 'watch', 'tv', 'headset', 'computer', 'cloud_done', 'cloud_download', 'cloud_upload', 'cloud_off', 'folder', 'title', 'insert_link', 'insert_chart', 'format_quote', 'format_list_bulleted', 'format_list_numbered', 'attach_file', 'attach_money', 'access_alarms', 'account_box', 'account_circle', 'bookmark', 'bookmark_border', 'fingerprint', 'gif', 'home', 'info', 'info_outline']

  showModalScrollView () {
    Thresh.showModal(
      this.renderModal(),
      {
        popup: true
      }
    )
  }

  renderModal () {
    return (
      <Container>
        <Container height={ui.screenHeight * 0.3} width={ui.screenWidth} onTap={() => { Thresh.hideModal() }} />
        <Container height={ui.screenHeight * 0.7} width={ui.screenWidth} backgroundColor={0xffffffff}>
          <ScrollView>
            <Container wrap row width={ui.screenWidth}>
              {
                this.icons.map(icon => (
                  <Center width={ui.screenWidth / 3} padding={ui.rpx(20)}>
                    <Icon type={icon} size={ui.rpx(40)} />
                    <Text size={ui.rpx(20)} margin={{ top: ui.rpx(10) }}>{icon}</Text>
                  </Center>
                ))
              }
            </Container>
          </ScrollView>
        </Container>
      </Container>
    )
  }

  render () {
    return (
      <Page
        appBar={<AppBar title="在 Modal 中使用 ScrollView" />}
      >
        <Center width={ui.screenWidth} margin={ui.rpx(60)}>
          <Button
            height={ui.rpx(100)}
            backgroundColor={0xffff5b00}
            borderRadius={ui.rpx(4)}
            onTap={this.showModalScrollView.bind(this)}
          >
            <Text color={0xffffffff}>
              显示 ScrollView
            </Text>
          </Button>
        </Center>
      </Page>
    )
  }
}
