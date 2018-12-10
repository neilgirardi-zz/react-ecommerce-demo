export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'

export default function (products) {
  return {
    type: UPDATE_PRODUCTS,
    payload: products
  }
}
