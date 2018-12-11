import { connect } from 'react-redux'
import fetchProducts from '../actions/fetchProducts'
import filterProducts from '../actions/filterProducts'
import ProductArray from '../components/ProductArray'
import addToCart from '../../cart/actions/addToCart'

const stateToProps = (state, ownProps) => {
  return {
    products: state.productArray
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    filterProducts: (tag) => dispatch(filterProducts(tag)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(ProductArray)

export default connected