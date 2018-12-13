import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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

Checkout.propTypes = {
  orderStatus: PropTypes.object
}

export default Checkout
