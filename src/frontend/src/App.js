import React, { Component } from 'react'
import Header from './components/header/containers/header'
import MainContent from './components/main-content/MainContent'

class App extends Component {
  render () {
    return (
      <>
        <Header />
        <MainContent />
      </>
    )
  }
}

export default App
