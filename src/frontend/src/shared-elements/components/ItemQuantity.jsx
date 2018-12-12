import React, { PureComponent } from 'react'

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

export default ItemQuantity
