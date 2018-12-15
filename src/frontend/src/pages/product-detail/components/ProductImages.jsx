import React, { PureComponent } from 'react'

class ProductImages extends PureComponent {
  render() {
    const { images, altCopy } = this.props
    return (
      <>
        {images && Array.isArray(images) &&
          <ul>
            {
              images.map((url, i) => (
                <li key={i}>
                  <img src={url} alt={altCopy} />
                </li>
              ))
            }
          </ul>
        }
      </>
    )
  }
}

export default ProductImages
