import { connect } from 'react-redux'
import ProductDetail from '../ProductDetail.jsx'
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
)(ProductDetail)

export default connected
