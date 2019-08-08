import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorMsg from '../Common/ErrorMsg'
import styles from '../../styles/ReviewDisplayStyles'
import { withStyles } from '@material-ui/core/styles'
import {
  deleteReview,
  updateReview,
  getReview
} from '../../store/actions/reviewActions'

const ReviewDisplay = ({
  auth,
  review,
  classes,
  getReview,
  deleteReview,
  updateReview
}) => {
  return (
    <div className={`card horizontal`}>
      <ErrorMsg />
      {auth.isAuthenticated && review.user === auth.user._id ? (
        <>
          <i
            className={`fas fa-times ${classes.deleteReviewBtn}`}
            onClick={e => deleteReview(review._id)}
          />
          <i
            className={`fas fa-pencil-alt ${classes.updateReviewBtn}`}
            onClick={e => getReview(review._id)}
          />
        </>
      ) : null}
      <div className="card-image" style={{ maxWidth: '25% !important' }}>
        <img
          src={review.img}
          alt="brokenImgLink"
          className={classes.reviewImg}
        />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p className={classes.reviewText}>{review.text}</p>
        </div>
      </div>
    </div>
  )
}

ReviewDisplay.propTypes = {
  deleteReview: PropTypes.func.isRequired,
  getReview: PropTypes.func.isRequired
}

export default connect(
  null,
  { getReview, deleteReview, updateReview }
)(withStyles(styles)(ReviewDisplay))
