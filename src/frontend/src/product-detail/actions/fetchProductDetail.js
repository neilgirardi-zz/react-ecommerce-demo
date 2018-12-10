import axios from 'axios'
import updateProductDetail from './updateProductDetail'

export default function (productId) {
  return function (dispatch, getState) {
    const { productArray } = getState()
    const detail = productArray.filter( p => p.id === productId ).pop()
    dispatch(updateProductDetail(detail))
  }
}
