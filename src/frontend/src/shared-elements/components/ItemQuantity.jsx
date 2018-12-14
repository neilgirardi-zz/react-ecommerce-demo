import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ItemQuantity extends PureComponent {
  render () {
    return (
      <div className='form-group'>
        <label className={'input-label'}>Quantity</label>
        <input
          className='form-control'
          type={'number'}
          value={this.props.value}
          onChange={(e) => this.props.onChangeCB(e)}
        />
      </div>
    )
  }
}

ItemQuantity.propTypes = {
  value: PropTypes.number,
  onChangeCB: PropTypes.func
}

export default ItemQuantity
