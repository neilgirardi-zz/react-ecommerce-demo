import { connect } from 'react-redux'
import fetchProducts from '../actions/fetchProducts'
import filterProducts from '../actions/filterProducts'
import ProductArray from '../components/ProductArray'

const stateToProps = (state, ownProps) => {
  return {
    products: state.productArray
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    filterProducts: (tag) => dispatch(filterProducts(tag))
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(ProductArray)

export default connected