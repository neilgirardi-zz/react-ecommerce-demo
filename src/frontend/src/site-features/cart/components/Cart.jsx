import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import CartItems from './CartItems'
import CartSubTotal from './CartSubTotal'
import SubmitOrderButton from './SubmitOrderButton'

class Cart extends PureComponent {

  render () {
    const { cart, submitOrder, history, removeFromCart } = this.props
    const { items, subTotal } = cart
    const products = [];

    for (let item in items) {
      const i = items[item]
      products.push(i)
    }

    return (
      <>
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
      </>
    )
  }
}

export default withRouter(Cart)
