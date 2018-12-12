import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import fetchProductDetail from '../actions/thunks/fetchAndUpdateProductDetail'
import addToCart from '../../cart/actions/addToCart'

const stateToProps = ( state, ownProps ) => {
  const { productDetail } = state
  return {
    productDetail
  }
}

const dispatchToProps = (dispatch, ownProps) => {
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
