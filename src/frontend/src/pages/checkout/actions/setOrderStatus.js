export const SET_ORDER_STATUS = 'SET_ORDER_STATUS'

export default function (orderStatus) {
  return {
    type: SET_ORDER_STATUS,
    payload: orderStatus
  }
}
