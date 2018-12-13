import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CartSubTotal extends PureComponent {
  render () {
    const { subTotal, products } = this.props
    if (products.length) {
      return (
        <ul>
          <li>Subtotal: ${subTotal.subTotal.toLocaleString()}</li>
          <li>Tax: ${subTotal.tax}</li>
          <li>Shipping: ${subTotal.shipping}</li>
          <li>TOTAL: ${subTotal.grandTotal}</li>
        </ul>)
    } else {
      return null
    }
  }
}

CartSubTotal.propTypes = {
  subTotal: PropTypes.object,
  products: PropTypes.array
}

export default CartSubTotal
