import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProductListing from './ProductListing'

class ProductArray extends PureComponent {

  componentDidMount() {
    const { tag } = this.props
    this._getProducts(tag)
  }

  componentWillReceiveProps(nextProps) {
    const { tag } = nextProps
    if (tag !== this.props.tag) {
      this._getProducts(tag)
    }
  }

  _getProducts(tag) {
    (tag === undefined) ? this.props.fetchProducts() : this.props.fetchFilteredProducts(tag)
  }


  render () {
    const {products} = this.props
    return (
      <>
        <h1>Products</h1>
        {products && Array.isArray(products) &&
          <ul>
            {products.map((p, i) => (
              <li key={i}>
                <ProductListing product={p} addToCart={this.props.addToCart} />
              </li>
            ))}
          </ul>
        }
      </>
    )
  }
}

ProductArray.propTypes = {
  tag: PropTypes.string,
  products: PropTypes.array,
  addToCart: PropTypes.func
}

export default ProductArray
