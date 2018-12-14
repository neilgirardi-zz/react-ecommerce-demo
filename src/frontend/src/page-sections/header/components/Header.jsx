import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../../App.scss'

class Header extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      cartCount: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cartCount !== this.props.cartCount) {
      this.setState({ cartCount: nextProps.cartCount })
    }
  }

  render () {
    return (
      <header className='App-header'>
        <nav className='navbar navbar-dark bg-light'>
          <ul className='container'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            {this.state.cartCount > 0 &&
              <li>
                <Link to={'/cart'}>Cart ({this.state.cartCount})</Link>
              </li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  cartCount: PropTypes.number
}

export default Header
