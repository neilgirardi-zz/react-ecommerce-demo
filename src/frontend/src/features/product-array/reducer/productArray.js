import { UPDATE_PRODUCTS } from '../actions/updateProducts';
import { FILTER_PRODUCTS } from '../actions/filterProducts'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.payload

    case FILTER_PRODUCTS:
      const filter = action.payload
      return state.filter(item => item.tags.indexOf(filter) !== -1)

    default:
      return state
  }
}
