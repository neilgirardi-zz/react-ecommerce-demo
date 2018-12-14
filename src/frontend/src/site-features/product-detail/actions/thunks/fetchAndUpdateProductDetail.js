import axios from 'axios'
import updateProductDetail from '../updateProductDetail'

export default function (productId) {
  return function (dispatch, getState) {
    const url = '/get-items'
    axios.get(url)
      .then(response => {
        const productDetail = response.data.filter(p => p.id === productId).pop()
        dispatch(updateProductDetail(productDetail))
      })
  }
}
