import React, { PureComponent } from 'react'

class CartSubTotal extends PureComponent {
  render () {
    const { subTotal, products } = this.props
    if (products.length) {
      return (
        <ul>
          <li>Subtotal: {subTotal.subTotal}</li>
          <li>Tax: {subTotal.tax}</li>
          <li>Shipping: {subTotal.shipping}</li>
          <li>TOTAL: {subTotal.grandTotal}</li>
        </ul>)
    } else {
      return null
    }
  }
}

export default CartSubTotal
