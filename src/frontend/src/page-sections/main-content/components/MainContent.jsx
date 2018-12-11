import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../../../features/product-array/containers/ProductArray'
import ProductDetail from '../../../features/product-detail/containers/ProductDetail'

class MainContent extends Component {

  render () {
    return (
      <Switch>
        <Route exact path='/' render={ props => (
          <Products />
        )} />

        <Route path='/products/tags/:tag' render={ props => (
          <Products tag={props.match.params.tag} />
        )} />

        <Route path='/detail/:productId' render={ props => (
          <ProductDetail productId={props.match.params.productId} />)}
        />

        <Route path='/cart' render={ props => (
          <div>
            <h1>Shopping Cart</h1>
          </div>)}
        />
      </Switch>
    )
  }
}

export default MainContent
