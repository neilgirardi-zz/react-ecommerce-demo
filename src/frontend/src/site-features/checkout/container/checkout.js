import { connect } from 'react-redux'
import Checkout from '../components/Checkout'

const stateToProps = (state) => {
  const { orderStatus } = state
  return {
    orderStatus
  }
}

const connected = connect(
  stateToProps
)(Checkout)

export default connected
