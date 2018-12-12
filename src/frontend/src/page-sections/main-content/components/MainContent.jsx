import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../../../site-features/product-array/containers/ProductArray'
import ProductDetail from '../../../site-features/product-detail/containers/ProductDetail'
import Cart from '../../../site-features/cart/containers/cart'

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
         <Cart {...this.props} />)}
        />

        <Route path='/checkout' render={props => (
          <div>
            <h1>Checkout</h1>
          </div>)}
        />

      </Switch>
    )
  }
}

export default MainContent
