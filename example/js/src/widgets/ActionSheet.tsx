import Thresh, { Widget, basicWidgets, ui } from 'thresh-lib'

const {
  Container,
  Text
} = basicWidgets

interface ActionSheetItem {
  text: string,
  onTap?: () => void
}

interface ActionSheetProps {
  actions: ActionSheetItem[]
}

export default class ActionSheet extends Widget <ActionSheetProps, any> {
  render () {
    return (
      <Container height={ui.screenHeight} width={ui.screenWidth} backgroundColor={0x00000000}  justifyContent={'flex-end'}>
        <Container width={ui.screenWidth} flex={1} onTap={() => { Thresh.hideModal() }} />
        <Container width={ui.screenWidth} backgroundColor={0xffffffff}>
          {this.props.actions.map((action: ActionSheetItem, index: number) => {
            return (
              <Container onTap={async () => {
                await Thresh.hideModal()
                action.onTap && action.onTap()
              }}
                height={ui.rpx(90)}
                width={ui.screenWidth}
                justifyContent={'center'}
                alignItems={'center'}
                border={index !== this.props.actions.length && {
                  color: 0xFFE8E8E8,
                  side: [ 'bottom' ],
                  width: ui.rpx(2)
                }}
              >
                <Text align={'center'}>{action.text}</Text>
              </Container>
            )
          })}
          <Container width={ui.screenWidth} backgroundColor={0xFFE8E8E8} height={ui.rpx(16)}/>
          <Container onTap={() => {
            Thresh.hideModal()
          }} height={ui.rpx(90) + ui.bottomBarHeight} padding={{ bottom: ui.bottomBarHeight }} width={ui.screenWidth} justifyContent={'center'} alignItems={'center'}>
            <Text align={'center'}>取消</Text>
          </Container>
        </Container>
      </Container>
    )
  }

  static show (actions: ActionSheetItem[]) {
    Thresh.showModal(
      <ActionSheet actions={actions} />, {
        popup: true
      }
    )
  }
  static hide () {
    Thresh.hideModal()
  }
}
