import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ItemQuantity extends PureComponent {
  render () {
    return (
      <div className='item-quantity row form-group'>
        <div className='col'>
          <div className="d-flex justify-content-between">
            <label className={'input-label'}>Quantity</label>
            <input
              className='form-control'
              type={'number'}
              value={this.props.value}
              onChange={this.props.inStock ? (e) => this.props.onChangeCB(e) : () => {}}
            />
          </div>
        </div>
      </div>
    )
  }
}

ItemQuantity.propTypes = {
  value: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
  onChangeCB: PropTypes.func.isRequired
}

export default ItemQuantity
