import axios from 'axios'
import clearCart from '../clearCart'
import setOrderStatus from '../../../checkout/actions/setOrderStatus'

export default function (history) {
  return function (dispatch, getState) {
    const { cart } = getState()
    const { items } = cart
    const orderArr = []
    const cartIds = Object.keys(items)
    const url = '/checkout'

    cartIds.forEach(cartId => {
      const item = items[cartId]
      const itemData = {
        id: item.id,
        quantity: item.quantity
      }
      orderArr.push(itemData)
    })
    const order = {
      items: orderArr
    }
    return axios.post(url, order)
      .then(response => {
        dispatch(setOrderStatus(response.data))
        dispatch(clearCart())
        history.push('/checkout')
      })
  }
}
