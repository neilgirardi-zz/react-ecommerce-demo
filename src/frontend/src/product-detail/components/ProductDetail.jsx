import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductDetail extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { productId } = this.props
    this.props.updateProductDetail(productId)
  }

  render () {
    const { details: d } = this.props
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
            {d.inStock &&
              <div>
                Availability: {d.inStock ? 'In Stock!' : 'Out of Stock'}
              </div>
            }
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
                      <Link to={`/products/${t}`}>{t}</Link>
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
