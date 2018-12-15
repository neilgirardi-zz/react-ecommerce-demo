import { connect } from 'react-redux'
import Cart from '../components/Cart'
import submitOrder from '../actions/thunks/submitOrder'
import removeFromCart from '../actions/removeFromCart'

const stateToProps = (state) => {
  const { cart } = state
  return {
    cart
  }
}

const dispatchToProps = (dispatch) => {
  return {
    submitOrder: (history) => dispatch(submitOrder(history)),
    removeFromCart: (cartItemId) => dispatch(removeFromCart(cartItemId))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(Cart)

export default connected
