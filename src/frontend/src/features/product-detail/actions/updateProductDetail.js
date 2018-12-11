export const UPDATE_PRODUCT_DETAIL = 'UPDATE_PRODUCT_DETAIL'

export default function (detail) {
  return {
    type: UPDATE_PRODUCT_DETAIL,
    payload: detail
  }
}
