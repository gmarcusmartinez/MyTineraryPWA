import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { deleteReview } from '../../store/actions/reviewActions'

const styles = {
  reviewText: {
    fontFamily: 'Caveat',
    color: 'black',
    fontSize: '20px'
  },
  reviewCard: {
    height: '125px'
  },
  deleteReviewBtn: {
    fontSize: '20px',
    color: 'black',
    position: 'absolute',
    top: '-20px',
    right: '-6px',
    '&:hover': {
      color: 'red'
    }
  }
}

const ReviewDisplay = ({ auth, review, classes, deleteReview }) => {
  return (
    <div className="col s12 m6 l6">
      <div className={`card ${classes.reviewCard}`}>
        {auth.isAuthenticated && review.user === auth.user._id ? (
          <i
            className={`fas fa-times ${classes.deleteReviewBtn}`}
            onClick={e => deleteReview(review._id)}
          />
        ) : null}
        <div className="col s3">Img</div>

        <div className="col s9">
          <p className={classes.reviewText}>{review.text}</p>
        </div>
      </div>
    </div>
  )
}

ReviewDisplay.propTypes = {
  deleteReview: PropTypes.func.isRequired
}

export default connect(
  null,
  { deleteReview }
)(withStyles(styles)(ReviewDisplay))
