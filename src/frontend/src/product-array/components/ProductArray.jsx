import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class ProductArray extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { tag } = this.props
    this._getData(tag)
  }
  componentWillReceiveProps(nextProps) {
    const { tag } = nextProps
    if (tag !== this.props.tag) {
      this._getData(tag)
    }
  }

  _getData(tag) {
    tag === undefined ? this.props.fetchProducts() : this.props.filterProducts(tag)
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
