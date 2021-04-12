import Thresh, { basicWidgets, Util } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'
import Box from '../../widgets/Box'
import localImage from '../../assets/test_image.png'

const { Page, AppBar, ScrollView, Image } = basicWidgets

export default class ImageDemo extends Thresh.Widget <any, any> {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="Image 图片组件" />
        }
      >
        <ScrollView>
          <Title title="本地图片" />
          <Box>
            <Image src={localImage} />
          </Box>
          
          <Title title="网络图片" />
          <Box>
            <Image src="http://dmimg.5054399.com/allimg/pkm/pk/22.jpg" />
          </Box>

          <Title title="带占位图的网络图片" />
          <Box>
            <Image placeholder={localImage} src="https://upload-images.jianshu.io/upload_images/4741933-c8d3183c55365626.jpeg" fadeIn />
          </Box>
        </ScrollView>
      </Page>
    )
  }
}
