import { UPDATE_PRODUCT_DETAIL } from '../actions/updateProductDetail'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_DETAIL:
      return action.payload
    default:
      return state
  }
}
