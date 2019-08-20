import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from '../../styles/ReviewDisplayStyles'
import { withStyles } from '@material-ui/core/styles'
import { deleteReview, getReview } from '../../store/actions/reviewActions'

const ReviewDisplay = ({
  auth,
  index,
  review,
  classes,
  getReview,
  deleteReview
}) => {
  return (
    <div className={classes.review}>
      <img
        src={review.img}
        alt="brokenImgLink"
        className={`${classes.reviewImg} ${index % 2 === 0 ? 'right' : null}`}
      />
      <div
        className={`${classes.speechBubble} ${
          index % 2 !== 0 ? 'left' : null
        }`}>
        {auth.isAuthenticated && review.user === auth.user._id ? (
          <div className={classes.actionIcons}>
            <i
              className={`fas fa-pencil-alt ${classes.updateReviewBtn} right`}
              onClick={e => getReview(review._id)}
            />
            <i
              className={`fas fa-trash-alt ${classes.deleteReviewBtn} right`}
              onClick={e => deleteReview(review._id)}
            />
          </div>
        ) : null}
        {review.text}
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
  { getReview, deleteReview }
)(withStyles(styles)(ReviewDisplay))
