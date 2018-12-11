import { ADD_TO_CART } from '../actions/addToCart'
import { REMOVE_FROM_CART } from '../actions/removeFromCart'
import { UPDATE_CART_QUANTITY } from '../actions/updateCartQuantity'

export default (state={items: []}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const updatedItems = addItem(state, action)
      const subTotal = calculateSubTotal(updatedItems)
      return {
        ...state,
        items: updatedItems,
        subTotal
      }

    case REMOVE_FROM_CART:
      return state

    case UPDATE_CART_QUANTITY:
      return state

    default:
      return state
  }
}

function addItem({ items }, { payload }){
  const sliced = items.slice(0)
  sliced.push(payload)
  return sliced
}

function calculateSubTotal(items) {
  const itemSubTotals = []
  items.forEach(item => {
    itemSubTotals.push(item.price * item.quantity)
  })
  const orderSubTotal = Number(itemSubTotals.reduce( (curr, acc) => curr + acc, 0 ).toFixed(2))
  const tax = Number((orderSubTotal * 0.08875).toFixed(2))
  const shipping = 9.99
  const grandTotal = (orderSubTotal + tax + shipping).toFixed(2)
  return {
    subTotal: orderSubTotal,
    tax,
    shipping,
    grandTotal
  }
}