import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../../../site-features/product-array/containers/ProductArray'
import ProductDetail from '../../../site-features/product-detail/containers/ProductDetail'
import Cart from '../../../site-features/cart/containers/cart'
import Checkout from '../../../site-features/checkout/container/checkout'

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
         <Cart />)}
        />

        <Route path='/checkout' render={ props => (
          <Checkout />)}
        />

      </Switch>
    )
  }
}

export default MainContent
