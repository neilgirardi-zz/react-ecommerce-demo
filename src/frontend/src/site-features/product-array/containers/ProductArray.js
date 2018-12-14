import { connect } from 'react-redux'
import fetchProducts from '../actions/thunks/fetchAndUpdateProducts'
import fetchFilteredProducts from '../actions/thunks/fetchAndFilterProducts'
import ProductArray from '../components/ProductArray'
import addToCart from '../../cart/actions/addToCart'

const stateToProps = (state) => {
  return {
    products: state.productArray.products
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchFilteredProducts: (tag) => dispatch(fetchFilteredProducts(tag)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(ProductArray)

export default connected
