import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import updateProductDetail from '../actions/updateProductDetail'
import addToCart from '../../cart/actions/addToCart'

const stateToProps = ( state, ownProps ) => {
  const { productArray, productDetail } = state
  return {
    productArray,
    productDetail
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    updateProductDetail: (productDetails) => dispatch(updateProductDetail(productDetails)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem))
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { productArray } = stateProps
  const { updateProductDetail } = dispatchProps
  const detail = productArray.filter( p => p.id === ownProps.productId ).pop()
  updateProductDetail(detail)
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps,
  mergeProps
)(ProductDetail)

export default connected
