import { connect } from 'react-redux'
import CartItem from '../components/CartItem'
import updateCartQuantity from '../actions/updateCartQuantity'

const dispatchToProps = (dispatch, ownProps) => {
  return {
    updateCartQuantity: (cartItemId, qty) => dispatch(updateCartQuantity(cartItemId, qty))
  }
}

const connected = connect(
  null,
  dispatchToProps
)(CartItem)

export default connected
