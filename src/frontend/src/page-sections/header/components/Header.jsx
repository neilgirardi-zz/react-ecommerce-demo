import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import '../../../App.scss'

class Header extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header className='App-header'>
        <ul>
          <li>===
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
        </ul>
      </header>
    )
  }
}
export default Header
