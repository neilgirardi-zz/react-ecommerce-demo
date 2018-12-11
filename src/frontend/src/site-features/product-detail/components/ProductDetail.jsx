import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ItemQuantity from '../../../reusable-elements/components/ItemQuantity'

class ProductDetail extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 1
    }
    this._updateQuantity = this._updateQuantity.bind(this)
    this._addToCart = this._addToCart.bind(this)
  }

  _updateQuantity(evt){
    this.setState({
      quantity: Number(evt.target.value)
    })
  }

  _addToCart(){
    const cartItem = {
      ...this.props.productDetail,
      quantity: this.state.quantity
    }
    this.props.addToCart(cartItem)
  }

  render () {
    const { productDetail: d } = this.props
    return (
      <>
        {d &&
          <>
            <h2>
              <Link to={`/detail/${d.id}`}>
                {d.title}
              </Link>
            </h2>

            {d.images && Array.isArray(d.images) &&
              <ul>
                {
                  d.images.map((url, i) => (
                    <li key={i}>
                      <img src={url} alt={d.title}/>
                    </li>
                  ))
                }
              </ul>
            }

            {d.description &&
              <p>{d.description}</p>
            }

            {d.price &&
              <p>{`$${d.price}`}</p>
            }

            {d.inStock !== undefined &&
              <div>
                Availability: {d.inStock ? 'In Stock!' : 'Out of Stock'}
              </div>
            }

            <ItemQuantity
              value={this.state.quantity}
              onChangeCB={(e) => this._updateQuantity(e)}
            />

            <button disabled={!d.inStock} onClick={() => this._addToCart()}>Add to Cart</button>

            <h2>Reviews:</h2>

            {d.reviews && Array.isArray(d.reviews) &&
              d.reviews.map((r, i) => (
                <div key={i}>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              ))
            }

            {d.tags && Array.isArray(d.tags) &&
              <ul>
                {
                  d.tags.map((t, i) => (
                    <li key={i}>
                      <Link to={`/products/tags/${t}`}>{t}</Link>
                    </li>
                  ))
                }
              </ul>
            }
          </>
        }
      </>
    )
  }
}

export default ProductDetail
