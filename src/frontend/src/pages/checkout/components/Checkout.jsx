import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Checkout extends PureComponent {
  render () {
    const { orderStatus } = this.props
    const { message } = orderStatus
    return (
      <div className='container'>
        <h1>{message}</h1>
      </div>
    )
  }
}

Checkout.propTypes = {
  orderStatus: PropTypes.object
}

export default Checkout
