import React, { PureComponent } from 'react'

class Checkout extends PureComponent {
  render () {
    const { orderStatus } = this.props
    const { message } = orderStatus
    return (
      <>
        <p>{message}</p>
      </>
    )
  }
}

export default Checkout
