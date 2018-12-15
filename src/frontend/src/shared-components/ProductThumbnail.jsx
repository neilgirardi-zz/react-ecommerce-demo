import React, { PureComponent } from 'react'

class ProductThumbnail extends PureComponent {
  render() {
    const { thumbnail, altText } = this.props
    return (
      <>
        {thumbnail &&
          <img src={thumbnail} alt={altText} className='img-thumbnail' />
        }
      </>
    )
  }
}

export default ProductThumbnail