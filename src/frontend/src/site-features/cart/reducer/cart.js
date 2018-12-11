import { ADD_TO_CART } from '../actions/addToCart'

export default (state={items: []}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const { items } = state;
      const sliced = items.slice(0)
      sliced.push(action.payload)
      return {
        ...state,
        items: sliced
      }

    default:
      return state
  }
}