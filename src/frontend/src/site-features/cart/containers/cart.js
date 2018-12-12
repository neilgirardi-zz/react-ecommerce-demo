import { connect } from 'react-redux'
import Cart from '../components/Cart'
import submitOrder from '../actions/thunks/submitOrder'

const stateToProps = (state, ownProps) => {
  const { cart } = state;
  return {
    cart
  }
}

const dispatchToProps = (dispatch, ownProps) => {
  return {
    submitOrder: (history) => {
      const orderResponse = dispatch(submitOrder(history))
    }
  }
}

const connected = connect(
  stateToProps,
  dispatchToProps
)(Cart)

export default connected
