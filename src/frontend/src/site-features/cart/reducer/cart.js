import { ADD_TO_CART } from '../actions/addToCart'
import { REMOVE_FROM_CART } from '../actions/removeFromCart'
import { UPDATE_CART_QUANTITY } from '../actions/updateCartQuantity'
import { CLEAR_CART } from '../actions/clearCart'

export default (state = { items: {}, count: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return GetNextCartState.addItemToCart(state, action)

    case REMOVE_FROM_CART:
      return GetNextCartState.removeItemFromCart(state, action)

    case UPDATE_CART_QUANTITY:
      return GetNextCartState.updateItemQuantity(state, action)

    case CLEAR_CART:
      return { items: {}, count: 0 }

    default:
      return state
  }
}

class GetNextCartState {
  /**
   *
   * @param {Object} cartItems
   * @returns {{shipping: number, grandTotal: string, tax: number, subTotal: number}}
   */
  static calculateSubTotal (cartItems) {
    const itemSubTotals = []

    for (let cartItem in cartItems) {
      let item = cartItems[cartItem]
      itemSubTotals.push(item.price * item.quantity)
    }

    const orderSubTotal = Number(
      itemSubTotals.reduce((curr, acc) => curr + acc, 0).toFixed(2)
    )

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

  /**
   *
    * @param {Object} items
   * @param {number} count
   * @param {Object} itemToAdd
   * @returns {{count: number, subTotal: {shipping: number, grandTotal: string, tax: number, subTotal: number}, items: Object}}
   */
  static addItemToCart ({ items, count }, { payload: itemToAdd }) {
    const itemsClone = Object.assign({}, items)
    const updatedCount = count + 1

    itemToAdd.cartId = count
    itemsClone[count] = itemToAdd

    return {
      count: updatedCount,
      items: itemsClone,
      subTotal: this.calculateSubTotal(itemsClone)
    }
  }

  static removeItemFromCart ({ items, count }, { payload: IdToRemove }) {
    const itemsClone = Object.assign({}, items)
    const updatedCount = count - 1

    delete itemsClone[IdToRemove]

    return {
      count: updatedCount,
      items: itemsClone,
      subTotal: this.calculateSubTotal(itemsClone)
    }
  }

  /**
   *
   * @param {Object} items
   * @param {number} count
   * @param {Object} payload
   * @returns {{count: number, subTotal: {shipping: number, grandTotal: string, tax: number, subTotal: number}, items: Object}}
   */
  static updateItemQuantity ({ items, count }, { payload }) {
    const itemsClone = Object.assign({}, items)
    const { cartItemId, qty } = payload
    let updatedCount

    if (qty === 0) {
      delete itemsClone[cartItemId]
      updatedCount = count - 1
    } else {
      itemsClone[cartItemId].quantity = qty
      updatedCount = count
    }

    return {
      count: updatedCount,
      items: itemsClone,
      subTotal: this.calculateSubTotal(itemsClone)
    }
  }
}
