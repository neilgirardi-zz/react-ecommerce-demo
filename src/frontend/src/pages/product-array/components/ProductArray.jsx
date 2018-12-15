import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Product from '../../../shared-components/Product'

class ProductArray extends PureComponent {
  componentDidMount () {
    const { tag } = this.props
    this._getProducts(tag)
  }

  componentWillUpdate (nextProps) {
    const { tag } = nextProps
    if (tag !== this.props.tag) {
      this._getProducts(tag)
    }
  }

  _getProducts (tag) {
    (tag === undefined) ? this.props.fetchProducts() : this.props.fetchFilteredProducts(tag)
  }

  render () {
    const { products } = this.props
    return (
      <div className='container product-array'>
        <h1>Products</h1>
        {products && Array.isArray(products) &&
          <ul className='row'>
            {products.map((p, i) => (
              <li key={i} className='col-md-3'>
                <Product product={p} addToCart={this.props.addToCart} />
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

ProductArray.propTypes = {
  tag: PropTypes.string,
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default ProductArray
