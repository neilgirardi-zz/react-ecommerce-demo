import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import CartItems from '../../components/cart/CartItems'
import CartSubTotal from '../../components/cart/CartSubTotal'
import SubmitOrderButton from '../../components/cart/SubmitOrderButton'

class Cart extends PureComponent {
  render () {
    const { cart, submitOrder, history, removeFromCart } = this.props
    const { items, subTotal } = cart
    const products = []

    for (let item in items) {
      const i = items[item]
      products.push(i)
    }

    return (
      <div className='container cart main-content'>
        <h1>Cart</h1>

        <CartItems
          products={products}
          removeFromCart={removeFromCart}
        />

        <CartSubTotal
          subTotal={subTotal}
          products={products}
        />

        <SubmitOrderButton
          submitOrder={submitOrder}
          history={history}
          products={products}
        />
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.object,
  submitOrder: PropTypes.func,
  history: PropTypes.object,
  removeFromCart: PropTypes.func

}

export default withRouter(Cart)
