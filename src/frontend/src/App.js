import React, { Component } from 'react'
import Header from './page-sections/header/containers/header'
import MainContent from './page-sections/main-content/components/MainContent'

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
