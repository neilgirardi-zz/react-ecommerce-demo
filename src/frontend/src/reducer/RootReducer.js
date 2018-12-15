import { combineReducers } from 'redux'
import productArray from '../pages/product-array/reducer/productArray'
import productDetail from '../pages/product-detail/reducer/productDetail'
import cart from '../pages/cart/reducer/cart'
import orderStatus from '../pages/checkout/reducer/orderStatus'

export default combineReducers({
  productArray,
  productDetail,
  cart,
  orderStatus
})
