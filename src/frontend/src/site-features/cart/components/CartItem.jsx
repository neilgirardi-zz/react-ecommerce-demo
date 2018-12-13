import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import ItemQuantity from '../../../shared-elements/components/ItemQuantity'

class CartItem extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 0
    }
    this._updateQuantity = this._updateQuantity.bind(this);
    this._addToCart = this._addToCart.bind(this)
  }

  componentDidMount() {
    this.setState({
      quantity: this.props.quantity
    })
  }

  _updateQuantity(evt){
    this.setState({
      quantity: Number(evt.target.value)
    }, () => this.props.updateCartQuantity(this.props.product.cartId, this.state.quantity))
  }

  _addToCart(){
    const cartItem = {
      ...this.props.product,
      quantity: this.state.quantity
    };
    this.props.addToCart(cartItem)
  }

  render() {
    const {product: p} = this.props;
    return (
      <>
        <h2>
          <Link to={`/detail/${p.id}`}>{p.title}</Link>
        </h2>

        {p.thumbnail &&
          <img src={p.thumbnail} alt={p.title} />
        }

        {p.price &&
          <p>{`$${p.price}`}</p>
        }

        <ItemQuantity
          value={this.state.quantity}
          onChangeCB={(e) => this._updateQuantity(e)}
        />

        <button onClick={() => this.props.removeFromCart(p.cartId)}>Remove Item</button>
      </>
    )
  }
}

export default CartItem
