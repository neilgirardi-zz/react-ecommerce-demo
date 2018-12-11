import { combineReducers } from 'redux'
import productArray from '../features/product-array/reducer/productArray'
import productDetail from '../features/product-detail/reducer/productDetail'
import cart from '../features/cart/reducer/cart'

export default combineReducers({
  productArray,
  productDetail,
  cart
})
