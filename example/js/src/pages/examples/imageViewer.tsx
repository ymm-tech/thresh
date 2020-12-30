import Thresh, {
  Widget,
  basicWidgets,
  Util,
  ui
} from 'thresh-lib'
import Center from '../../widgets/Center'
import BannerImage1 from '../../assets/test_image.png'
import BannerImage2 from '../../assets/icon_dealing.png'
import BannerImage3 from '../../assets/icon_success.png'

const {
  Page,
  AppBar,
  SwiperView,
  Button,
  Image
} = basicWidgets

export default class ImageViewer extends Widget <any, any> {
  $swiper

  bindSwiperView (ref) {
    this.$swiper = ref
  }
  render () {
    const swiperViewHeight = ui.screenHeight - ui.appbarHeight - ui.statusBarHeight
    return (
      <Page
        appBar={<AppBar title="图片浏览器" backgroundColor={0xff000000} titleColor={0xffffffff} statusTextLight />}
        backgroundColor={0xff000000}
      >
        <SwiperView
          row={false}
          ref={this.bindSwiperView.bind(this)}
          width={ui.screenWidth}
          height={swiperViewHeight}
          backgroundColor={0xff000000}
          initIndex={0}
          onChange={({ index }) => { Util.log(index) }}
        >
          <Center onTap={() => {
            setTimeout(() => {
              this.$swiper.swipeTo(2)
            }, 2000)
          }}>
            <Image src={BannerImage1} />
          </Center>
          <Center>
            <Image src={BannerImage2} />
          </Center>
          <Center>
            <Image src={BannerImage3} />
          </Center>
        </SwiperView>
      </Page>
    )
  }
}
