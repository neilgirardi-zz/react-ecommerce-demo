import React, { Component } from 'react'
import Header from './header/containers/header'
import MainContent from './main-content/components/MainContent'

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
