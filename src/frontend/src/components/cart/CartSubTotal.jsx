import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CartSubTotal extends PureComponent {
  render () {
    const { subTotal, products } = this.props
    if (products.length) {
      return (
        <div className='subtotal row'>
          <div className='col-md-3'>
            <div className="d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>${subTotal.subTotal.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax:</span>
              <span>${subTotal.tax}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping:</span>
              <span>${subTotal.shipping}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span><strong>Total:</strong></span>
              <span><strong>${subTotal.grandTotal}</strong></span>
            </div>
          </div>
        </div>
     )
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
