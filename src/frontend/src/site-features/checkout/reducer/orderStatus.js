import { SET_ORDER_STATUS } from '../actions/setOrderStatus'

export default (state = {}, action) => {
  switch(action.type) {
    case SET_ORDER_STATUS:
      return action.payload

    default:
      return state
  }
}
