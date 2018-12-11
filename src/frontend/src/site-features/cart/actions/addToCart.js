export const ADD_TO_CART = 'ADD_TO_CART'

export default function (cartItem) {
  return {
    type: ADD_TO_CART,
    payload: cartItem
  }
}
