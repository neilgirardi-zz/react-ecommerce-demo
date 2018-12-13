export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY'

export default function(cartItemId, qty) {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {cartItemId, qty}
  }
}
