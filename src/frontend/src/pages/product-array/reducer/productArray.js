import { UPDATE_PRODUCTS } from '../actions/updateProducts'
import { FILTER_PRODUCTS } from '../actions/filterProducts'

export default (state = { products: [] }, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        products: action.payload
      }

    case FILTER_PRODUCTS:
      const filter = action.payload
      const { products } = state
      const filtered = products.filter(item => item.tags.indexOf(filter) !== -1)
      return {
        products: filtered
      }

    default:
      return state
  }
}
