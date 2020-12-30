import Thresh, { basicWidgets, ui } from 'thresh-lib'
import { Colors } from '../../config'
import Title from '../../widgets/Title'

const { Page, AppBar, NoticeBar, Text, Container, Icon, ScrollView } = basicWidgets

export default class NoticeBarDemo extends Thresh.Widget {
  render () {
    return (
      <Page
        backgroundColor={Colors.Pagebg}
        appBar={
          <AppBar title="NoticeBar 通知栏组件" />
        }
      >
        <ScrollView>
          <Title title="默认样式" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
          >
            <Text>这是一条通知这是一条通知这是一条通知这是一条通知这是一条通知</Text>
          </NoticeBar>

          <Title title="调整滚动速度" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
            speed={60}
          >
            <Text>这是一条通知这是一条通知这是一条通知这是一条通知这是一条通知</Text>
          </NoticeBar>

          <Title title="显示多条通知" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
          >
            <Text>这是第 1 条通知，这是第 1 条通知</Text>
            <Text>这是第 2 条通知</Text>
            <Text>这是第 3 条通知，这是第 3 条通知，这是第 3 条通知</Text>
          </NoticeBar>

          <Title title="自定义多条通知间距" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
            gutter={100}
          >
            <Text>这是第 1 条通知，这是第 1 条通知</Text>
            <Text>这是第 2 条通知</Text>
            <Text>这是第 3 条通知，这是第 3 条通知，这是第 3 条通知</Text>
          </NoticeBar>

          <Title title="内容过短时无动画" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
          >
            <Text>这是一条无滚动通知</Text>
          </NoticeBar>

          <Title title="前置组件" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
            prefix={(
              <Icon type="camera" size={20} margin={{ right: 10 }} />
            )}
          >
            <Text>这是一条通知这是一条通知这是一条通知这是一条通知这是一条通知</Text>
          </NoticeBar>

          <Title title="前置组件与后置组件" />
          <NoticeBar
            padding={10}
            margin={{ bottom: 30, top: 10 }}
            backgroundColor={Colors.White}
            prefix={(
              <Icon type="camera" size={20} margin={{ right: 10 }} />
            )}
            suffix={(
              <Icon type="cloud_done" size={20} margin={{ left: 10 }} />
            )}
          >
            <Text>这是一条通知这是一条通知这是一条通知这是一条通知这是一条通知</Text>
          </NoticeBar>
        </ScrollView>
      </Page>
    )
  }
}
