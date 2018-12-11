import { combineReducers } from 'redux'
import productArray from '../site-features/product-array/reducer/productArray'
import productDetail from '../site-features/product-detail/reducer/productDetail'
import cart from '../site-features/cart/reducer/cart'

export default combineReducers({
  productArray,
  productDetail,
  cart
})
