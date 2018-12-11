export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export default function(cartId) {
  return {
    type: REMOVE_FROM_CART,
    payload: cartId
  }
}
