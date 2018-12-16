import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CartItem from '../../pages/cart/containers/cartItem'

class CartItems extends PureComponent {
  render () {
    const { products, removeFromCart } = this.props
    if (products && products.length > 0) {
      return (
        <ul className='row'>
          {products.map((p, i) => (
            <li key={i} className='col-md-3'>
              <CartItem
                product={p}
                quantity={p.quantity}
                removeFromCart={removeFromCart}
              />
            </li>))
          }
        </ul>
      )
    } else {
      return (<div>Your cart is empty</div>)
    }
  }
}

CartItems.propTypes = {
  products: PropTypes.array,
  removeFromCart: PropTypes.func
}

export default CartItems
