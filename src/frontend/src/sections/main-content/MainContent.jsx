import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../../product-array/containers/ProductArray'
import ProductDetail from '../../product-detail/containers/ProductDetail'

class MainContent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Switch>
        <Route exact path='/' render={props => (
          <Products />
        )} />
        <Route path='/detail/:productId' render={props => (
          <ProductDetail productId={props.match.params.productId} />)}
        />
        <Route path='/cart' render={props => (
          <div>
            <h1>Shopping Cart</h1>
          </div>)}
        />
      </Switch>
    )
  }
}

export default MainContent
