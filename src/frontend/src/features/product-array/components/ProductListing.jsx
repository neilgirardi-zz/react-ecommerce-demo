import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class ProductListing extends PureComponent {

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

                {p.description &&
                    <p>{p.description}</p>
                }

                {p.price &&
                    <p>{`$${p.price}`}</p>
                }

                <button>Add to Cart</button>
            </>
        )
    }
}

export default ProductListing