import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class ProductTags extends PureComponent {
  render () {
    const { tags } = this.props
    return (
      <>
      {tags && Array.isArray(tags) &&
        <>
          <h2>Similar Products:</h2>
          <ul>
            {
              tags.map((t, i) => (
                <li key={i}>
                  <Link to={`/products/tags/${t}`}>
                    <span className='badge badge-primary'>{t}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
      </>
    }
  </>)
  }
}

export default ProductTags
