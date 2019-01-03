import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store'
import './index.css'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
