import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from '../../styles/ReviewDisplayStyles'
import { withStyles } from '@material-ui/core/styles'
import {
  deleteReview,
  updateReview,
  getReview
} from '../../store/actions/reviewActions'

const ReviewDisplay = ({
  auth,
  index,
  review,
  classes,
  getReview,
  deleteReview,
  updateReview
}) => {
  console.log(index)
  return (
    <div className={classes.review}>
      {/* {auth.isAuthenticated && review.user === auth.user._id ? (
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
      ) : null} */}
      {index % 2 === 0 ? (
        <>
          <img
            src={review.img}
            alt="brokenImgLink"
            className={classes.reviewImg}
          />
          <div className={classes.speechBubble}>{review.text}</div>
        </>
      ) : (
        <>
          <div className={classes.speechBubble}>{review.text}</div>
          <img
            src={review.img}
            alt="brokenImgLink"
            className={classes.reviewImg}
          />
        </>
      )}
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
