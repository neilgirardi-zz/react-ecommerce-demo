import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ItemQuantity from './components/ItemQuantity'
import ProductReviews from './components/ProductReviews'
import ProductTags from './components/ProductTags'
import ProductImages from './components/ProductImages'
import ProductThumbnail from './components/ProductThumbnail'
import ItemInventoryStatus from './components/ItemInventoryStatus'
import ProductDescription from './components/ProductDescription'

class Product extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this._updateQuantity = this._updateQuantity.bind(this)
    this._addToCart = this._addToCart.bind(this)
  }

  componentDidMount () {
    if (this.props.isDetailView)
    this.props.fetchProductDetail(this.props.productId)
  }

  _updateQuantity (evt) {
    this.setState({
      quantity: Number(evt.target.value)
    })
  }

  _addToCart () {
    const cartItem = {
      ...this.props.product,
      quantity: this.state.quantity
    }
    this.props.addToCart(cartItem)
  }

  render () {
    const { product: p, isDetailView } = this.props
    return (
      <>
      {p &&
        <div className='product'>
          <h2>
            <Link to={`/detail/${p.id}`}>{p.title}</Link>
          </h2>

          {isDetailView &&
            <>
              <ProductImages images={p.images} altCopy={p.title}/>
              <ProductDescription description={p.description} />
            </>
          }

          {!isDetailView &&
            <ProductThumbnail thumbnail={p.thumbnail} altText={p.title} />
          }

          {p.price &&
            <p>{`$${p.price}`}</p>
          }

          <ItemInventoryStatus status={p.inStock} />

          <ItemQuantity
            value={this.state.quantity}
            onChangeCB={(e) => this._updateQuantity(e)}
          />

          <button
            disabled={!p.inStock}
            onClick={() => this._addToCart()}
            className='btn btn-primary'
          >Add to Cart</button>

          {isDetailView &&
            <>
              <ProductReviews reviews={p.reviews} />
              <ProductTags tags={p.tags} />
            </>
          }
        </div>
      }
      </>
    )
  }
}

Product.propTypes = {
  productId: PropTypes.string,
  productDetail: PropTypes.object,
  fetchProductDetail: PropTypes.func
}

export default Product
