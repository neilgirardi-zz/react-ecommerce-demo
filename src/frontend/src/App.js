import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './sections/header/components/Header'
import MainContent from './sections/main-content/MainContent'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <MainContent />
        </div>
      </Router>
    )
  }
}

export default App
