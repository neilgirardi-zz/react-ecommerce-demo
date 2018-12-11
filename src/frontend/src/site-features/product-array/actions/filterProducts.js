export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'

export default function(filter) {
  return {
    type: FILTER_PRODUCTS,
    payload: filter
  }
}
