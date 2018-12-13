import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ItemQuantity extends PureComponent {
  render() {
    return (
      <>
        <span className={'input-label'}>Quantity</span>
        <input
          type={'number'}
          value={this.props.value}
          onChange={(e) => this.props.onChangeCB(e)}
        />
      </>
    )
  }
}

ItemQuantity.propTypes = {
  value: PropTypes.number,
  onChangeCB: PropTypes.func
}

export default ItemQuantity
