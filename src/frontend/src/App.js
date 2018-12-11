import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './page-sections/header/components/Header'
import MainContent from './page-sections/main-content/components/MainContent'

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
