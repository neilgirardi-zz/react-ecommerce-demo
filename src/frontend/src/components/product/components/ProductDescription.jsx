import React, { PureComponent } from 'react'

class ProductDescription extends PureComponent {
  render() {
    const { description } = this.props
    return (
      <>
        {description &&
            <p>{description}</p>
        }
      </>
    )
  }
}

export default ProductDescription
