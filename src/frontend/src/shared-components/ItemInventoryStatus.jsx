import React, { PureComponent } from 'react'

class ItemInventoryStatus extends PureComponent {
  render() {
    const { status: inStock } = this.props
    return (
      <>
        {inStock !== undefined &&
            <div>
                <span
                  className={inStock ? 'badge badge-success' : 'badge badge-danger'}>
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>
        }
      </>
    )
  }
}

export default ItemInventoryStatus