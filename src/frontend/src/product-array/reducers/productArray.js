import { UPDATE_PRODUCTS } from '../actions/updateProducts';
import { FILTER_PRODUCTS } from '../actions/filterProducts'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.payload

    case FILTER_PRODUCTS:
      const filter = action.payload
      return state.filter(item => {
        if (item.hasOwnProperty('tags') && Array.isArray(item.tags)) {
          return item.tags.indexOf(filter) !== -1
        }
      })

    default:
      return state
  }
}
