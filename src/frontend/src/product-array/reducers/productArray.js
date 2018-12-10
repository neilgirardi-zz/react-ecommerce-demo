import { UPDATE_PRODUCTS } from '../actions/updateProducts';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
