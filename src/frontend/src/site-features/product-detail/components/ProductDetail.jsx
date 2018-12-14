import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ItemQuantity from '../../../shared-elements/components/ItemQuantity'

class ProductDetail extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this._updateQuantity = this._updateQuantity.bind(this)
    this._addToCart = this._addToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchProductDetail(this.props.productId)
  }

  _updateQuantity(evt){
    this.setState({
      quantity: Number(evt.target.value)
    })
  }

  _addToCart(){
    const cartItem = {
      ...this.props.product,
      quantity: this.state.quantity
    }
    this.props.addToCart(cartItem)
  }

  // make button text and callback parameterized (either add or remove)

  render () {
    const { product: p } = this.props
    return (
      <div className='container product-detail'>
        {p &&
          <div className='product'>
            <h2>
              <Link to={`/detail/${p.id}`}>{p.title}</Link>
            </h2>

            {p.images && Array.isArray(p.images) &&
              <ul>
                {
                  p.images.map((url, i) => (
                    <li key={i}>
                      <img src={url} alt={p.title}/>
                    </li>
                  ))
                }
              </ul>
            }

            {p.description &&
              <p>{p.description}</p>
            }

            {p.price &&
              <p>{`$${p.price}`}</p>
            }

            {p.inStock !== undefined &&
            <div>
              <span
                className={p.inStock ? 'badge badge-success' : 'badge badge-danger'}>
                  {p.inStock ? 'In Stock!' : 'Out of Stock'}
              </span>
            </div>
            }

            <ItemQuantity
              value={this.state.quantity}
              onChangeCB={(e) => this._updateQuantity(e)}
            />

            <button
              disabled={!p.inStock}
              onClick={() => this._addToCart()}
              className='btn btn-primary'
            >Add to Cart</button>

            <h2>Reviews:</h2>

            {p.reviews && Array.isArray(p.reviews) &&
              p.reviews.map((r, i) => (
                <div key={i}>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              ))
            }

            {p.tags && Array.isArray(p.tags) &&
              <ul>
                {
                  p.tags.map((t, i) => (
                    <li key={i}>
                      <Link to={`/products/tags/${t}`}>{t}</Link>
                    </li>
                  ))
                }
              </ul>
            }
          </div>
        }
      </div>
    )
  }
}

ProductDetail.propTypes = {
  productId: PropTypes.string,
  productDetail: PropTypes.object,
  fetchProductDetail: PropTypes.func
}

export default ProductDetail
