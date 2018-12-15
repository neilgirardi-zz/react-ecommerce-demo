import React, { PureComponent } from 'react'
import StarRatings from 'react-star-ratings'

class ProductReviews extends PureComponent {
  render() {
    const { reviews } = this.props
    return (
      <div className='reviews'>
        <h2>Reviews:</h2>

        {reviews && Array.isArray(reviews) &&
          reviews.map((r, i) => (
            <div key={i}>
              <StarRatings
                starEmptyColor='rgb(212,175,55)'
                numberOfStars={r.rating}
                starDimension='25px'
                name='rating'
              />
              <h2>{r.title}</h2>
              <p>{r.body}</p>
              <p>&mdash; {r.author}</p>
            </div>
          ))
        }
      </div>
    )
  }

}

export default ProductReviews