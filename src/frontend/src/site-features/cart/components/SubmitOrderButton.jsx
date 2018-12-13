import React, { PureComponent } from 'react'

class SubmitOrderButton extends PureComponent {
  render () {
    const { products,  submitOrder, history} = this.props
    if (products && products.length) {
      return (
        <button onClick={() => submitOrder(history)}>Submit Order</button>
      )
    } else {
      return null
    }
  }
}

export default SubmitOrderButton
