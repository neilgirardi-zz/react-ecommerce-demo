import { combineReducers } from 'redux'
import productArray from '../product-array/reducers/productArray'
import productDetail from '../product-detail/reducers/productDetail'

export default combineReducers({
  productArray,
  productDetail
})
