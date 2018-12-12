import { connect } from 'react-redux'
import Header from '../components/Header'

const stateToProps = (state, ownProps) => {
  const { cart } = state
  const { count: cartCount } = cart

  return {
    cartCount
  }
}

const connected = connect(
  stateToProps
)(Header)

export default connected
