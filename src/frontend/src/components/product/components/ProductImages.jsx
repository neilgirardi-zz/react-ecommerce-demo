import React, { PureComponent } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

class ProductImages extends PureComponent {
  render() {
    const { images, altCopy } = this.props
    return (
      <div className='product-images'>
        {images && Array.isArray(images) &&
          <Carousel>
            {
              images.map((url, i) => (
                <div key={i}>
                  <img src={url} alt={altCopy} />
                </div>
              ))
            }
          </Carousel>
        }
      </div>
    )
  }
}

export default ProductImages
