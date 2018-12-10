import { connect } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import fetchProductDetail from '../actions/fetchProductDetail'

const stateToProps = ( state, ownProps ) => {
  const { productDetail } = state
  return {
    details: productDetail
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    updateProductDetail: () => dispatch(fetchProductDetail(ownProps.productId))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(ProductDetail)

export default connected
