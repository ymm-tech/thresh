import Thresh, { Widget, basicWidgets, ui } from 'thresh-lib'
import Center from './Center'

const { Text, Button, Container, Icon } = basicWidgets

export interface ModalButton {
  text: string,
  onTap?: () => void
}
interface ModalProps {
  title?: string
  message?: string
  showClose?: boolean
  buttonList?: ModalButton[]
}

export default class Modal extends Widget<ModalProps, any> {
  state = {
    modalHeight: void 0
  }

  render() {
    let { title, message, buttonList, showClose = false } = this.props
    const showCloseButton = showClose && !!this.state.modalHeight

    return (
      <Center backgroundColor={0x90000000} width={ui.screenWidth} height={ui.screenHeight}>
        <Container
          relative
          width={ui.screenWidth}
          height={this.state.modalHeight + ui.rpx(30)}
          padding={{ top: !!this.state.modalHeight ? 0 : ui.rpx(30) }}
          justifyContent="flex-end"
        >
          {
            showCloseButton && (
              <Center
                width={ui.rpx(60)}
                height={ui.rpx(60)}
                borderRadius={ui.rpx(30)}
                backgroundColor={0x90000000}
                absolute={{ top: 0, right: (ui.screenWidth - ui.rpx(580)) / 2 - ui.rpx(30) }}
                onTap={() => { Thresh.hideModal() }}
              >
                <Icon size={ui.rpx(40)} type="close" color={0xffffffff} />
              </Center>
            )
          }
          <Container
            width={ui.rpx(580)}
            borderRadius={ui.rpx(10)}
            backgroundColor={0xffffffff}
            margin={{ left: (ui.screenWidth - ui.rpx(580)) / 2 }}
            onLayout={({ height }) => {
              if (!showClose) return
              if (height === this.state.modalHeight) return
              this.state.modalHeight = height
              this.setState()
            }}
          >
            <Container
              width={ui.rpx(580)}
              alignItems="center"
              border={{
                color: 0x40333333,
                width: ui.rpx(1),
                side: ['bottom']
              }}>
              {
                title && (
                  <Center
                    width={ui.rpx(580)}
                    padding={{
                      top: message ? ui.rpx(30) : ui.rpx(50),
                      left: ui.rpx(20),
                      right: ui.rpx(20),
                      bottom: message ? 0 : ui.rpx(50) }
                    }
                  >
                    <Text size={ui.rpx(32)} align="center" weight="bold" overflow="ellipsis" maxLines={1}>{title}</Text>
                  </Center>
                )
              }
              {
                message && (
                  <Center
                    width={ui.rpx(580)}
                    padding={ui.rpx(30)}
                  >
                    <Text align="center" size={ui.rpx(28)} color={0xff333333}>{message}</Text>
                  </Center>
                )
              }
            </Container>
            <Container row alignItems="center" width={ui.rpx(580)}>
              {buttonList.map((item, index) => {
                return (
                  <Button
                    flex={1}
                    height={ui.rpx(80)}
                    border={
                      index != buttonList.length - 1
                        ? { width: ui.rpx(1), color: 0x40333333, side: ['right'] }
                        : null
                    }
                    onTap={async () => {
                      await Thresh.hideModal()
                      item.onTap && item.onTap()
                    }}>
                    <Text align="center" size={ui.rpx(28)} color={index === buttonList.length - 1 ? 0xffff5b00 : 0xff999999}>{item.text}</Text>
                  </Button>
                )
              })}
            </Container>
          </Container>
        </Container>
      </Center>
    )
  }

  static show (
    message: string = '',
    title: string = '',
    buttonList: ModalButton[] = [{ text: '好的' }],
    showClose: boolean = false
  ) {
    if (!message && !title) return
    Thresh.showModal(
      <Modal
        title={title}
        message={message}
        showClose={showClose}
        buttonList={buttonList}
      />
    )
  }
}
