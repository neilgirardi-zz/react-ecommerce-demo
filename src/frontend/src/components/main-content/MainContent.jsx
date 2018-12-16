import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../../pages/product-array/containers/ProductArray'
import ProductDetail from '../../pages/product-detail/containers/ProductDetail'
import Cart from '../../pages/cart/containers/cart'
import Checkout from '../../pages/checkout/container/checkout'

class MainContent extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={props => (
          <Products />
        )} />

        <Route path='/products/tags/:tag' render={props => (
          <Products tag={props.match.params.tag} />
        )} />

        <Route path='/detail/:productId' render={props => (
          <ProductDetail
            productId={props.match.params.productId}
            isDetailView={true}
          />)}
        />

        <Route path='/cart' render={props => (
          <Cart />)}
        />

        <Route path='/checkout' render={props => (
          <Checkout />)}
        />

      </Switch>
    )
  }
}

export default MainContent
