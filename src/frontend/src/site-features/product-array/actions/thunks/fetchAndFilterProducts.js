import axios from 'axios'
import updateProducts from '../updateProducts'
import filterProducts from '../filterProducts'

export default function(filter) {
  return function(dispatch, getState) {
    const url = '/get-items'
    axios.get(url)
      .then(response => {
        dispatch(updateProducts(response.data))
        dispatch(filterProducts(filter))
      })
  }
}