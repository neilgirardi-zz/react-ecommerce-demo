import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductArray extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProducts()
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
                <div>
                  <h2>
                    <Link to={`/detail/${p.id}`}>
                      {p.title}
                    </Link>
                  </h2>
                  {p.thumbnail &&
                    <img src={p.thumbnail} alt={p.title} />
                  }
                  {p.description &&
                    <p>{p.description}</p>
                  }
                  <p>{`$${p.price}`}</p>
                </div>
              </li>
            ))}
          </ul>
        }
      </>
    )
  }
}

export default ProductArray
