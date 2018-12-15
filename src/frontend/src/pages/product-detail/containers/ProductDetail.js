import { connect } from 'react-redux'
import Product from '../../../shared-components/Product'
import fetchProductDetail from '../actions/thunks/fetchAndUpdateProductDetail'
import addToCart from '../../cart/actions/addToCart'

const stateToProps = (state) => {
  const { productDetail } = state
  return {
    product: productDetail
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProductDetail: (productId) => dispatch(fetchProductDetail(productId)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(Product)

export default connected
