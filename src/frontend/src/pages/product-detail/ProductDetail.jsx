import React, { PureComponent } from 'react'
import Product from '../../components/product/Product.jsx'

class ProductDetail extends PureComponent {
  render() {
    const { productId, product, isDetailView, fetchProductDetail, addToCart } = this.props
    return (
      <div className={'product-detail container'}>
        <Product
          productId={productId}
          product={product}
          isDetailView={isDetailView}
          fetchProductDetail={fetchProductDetail}
          addToCart={addToCart}
        />
      </div>
    )
  }
}

export default ProductDetail
