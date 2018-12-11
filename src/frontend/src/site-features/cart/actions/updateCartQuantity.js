export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY'

export default function(qty) {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: qty
  }
}
