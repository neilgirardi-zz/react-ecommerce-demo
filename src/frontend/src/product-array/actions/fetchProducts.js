import axios from 'axios'
import updateProducts from './updateProducts'

export default function () {
  return function (dispatch, getState) {
    const url = '/get-items'
    axios.get(url)
      .then(response => {
        dispatch(updateProducts(response.data))
      })
  }
}
