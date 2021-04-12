import Thresh, {
  Widget,
  ui,
  basicWidgets
} from 'thresh-lib'
import { Colors } from '../../config'
import { DragableScrollView } from 'thresh-lib/src/core/basicWidget'

const {
  Page,
  AppBar,
  Container,
  Text,
} = basicWidgets

export default class DrawerScrollViewDemo extends Widget <any, any> {
  render () {
    return (
      <Page
        appBar={<AppBar title="DragableScrollView" />}
        backgroundColor={Colors.Pagebg}
      >
        <Container relative>
          <Container
            width={ui.screenWidth}
            height={ui.screenHeight - ui.appbarHeight - ui.statusBarHeight}
            backgroundColor={Colors.Primary}
            onTap={() => {
              console.log(123)
            }}
          />
          <InnerView />
        </Container>
      </Page>
    )
  }
}

class InnerView extends Widget {
  $view

  renderContent () {
    return (new Array(50)).fill(1).map((_, index) => (
      <Container backgroundColor={Colors.White}>
        <Container borderRadius={5} width={20} height={20} backgroundColor={index ? Colors.Primary : Colors.Red} margin={5} />
      </Container>
    ))
  }

  render () {
    return (
      <DragableScrollView
            ref={e => this.$view = e}
            initialSize={0.5}
            minSize={0.2}
            backgroundColor={Colors.White}
            borderRadius={{
              topLeft: 10,
              topRight: 10,
            }}
            onScroll={() => {}}
            onDragPositionChange={e => console.log(e)}
            headerView={
              <Container
                alignItems="center"
                padding={10}
                backgroundColor={Colors.White}
                onTap={() => {
                  if (!this.$view) return
                  (this.$view as DragableScrollView).dragPositionAnimateTo('initial')
                }}
              >
                <Container
                  width={50}
                  height={6}
                  borderRadius={3}
                  backgroundColor={Colors.Primary}
                />
              </Container>
            }
          >
            {this.renderContent()}
          </DragableScrollView>
    )
  }
}
