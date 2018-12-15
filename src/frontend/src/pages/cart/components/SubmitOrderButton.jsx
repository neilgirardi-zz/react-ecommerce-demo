import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SubmitOrderButton extends PureComponent {
  render () {
    const { products, submitOrder, history } = this.props
    if (products && products.length) {
      return (
        <button
          className='btn btn-success'
          onClick={() => submitOrder(history)}>Submit Order</button>
      )
    } else {
      return null
    }
  }
}

SubmitOrderButton.propTypes = {
  products: PropTypes.array,
  submitOrder: PropTypes.func,
  history: PropTypes.object
}

export default SubmitOrderButton
