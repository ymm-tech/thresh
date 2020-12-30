import Thresh, { basicWidgets } from 'thresh-lib'

const { Container } = basicWidgets

export default class Center extends Thresh.Widget <any, any> {
  render () {
    const { children, ...props } = this.props
    return (
      <Container
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {children}
      </Container>
    )
  }
}
