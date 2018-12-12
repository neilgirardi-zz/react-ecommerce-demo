import React, { PureComponent } from 'react'
import { withRouter } from "react-router-dom";

class Cart extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Cart!</h1>
        <button onClick={() => this.props.submitOrder(this.props.history)}>Submit Order</button>
      </div>
    )
  }
}

export default withRouter(Cart)
