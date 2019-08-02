import { connect } from 'react-redux'
import Slider from '../Common/Slider'
import Spinner from '../Common/Spinner'
import React, { useEffect, useState } from 'react'
import ReviewDisplay from '../Reviews/ReviewDisplay'
import { withStyles } from '@material-ui/core/styles'
import ActivityDisplay from '../Activities/ActivityDisplay'
import { getReviews } from '../../store/actions/reviewActions'
import useToggleState from '../../hooks/useToggleState'
import { getActivities } from '../../store/actions/activityActions'

const styles = {
  itineraryTitle: {
    color: '#e57373',
    fontFamily: 'Caveat',
    width: '60%',
    marginInlineStart: '20%'
  }
}
const Itinerary = ({
  auth,
  match,
  classes,
  location,
  getReviews,
  getActivities,
  activities: { activities, loading },
  reviews: { reviews, reviewsLoading }
}) => {
  // const [displayCreateReview, setDisplayCreateReview] = useState(false)
  const [displaySlider, toggle] = useToggleState(false)

  useEffect(() => {
    getActivities(match.params.id)
    getReviews(match.params.id)
  }, [getActivities, getReviews, match.params.id])

  let activitiesList
  if (activities === null || loading) {
    activitiesList = <Spinner />
  } else {
    activitiesList = activities.map(activity => (
      <ActivityDisplay key={activity._id} activity={activity} />
    ))
  }

  let reviewsList
  if (reviews === null || reviewsLoading) {
    reviewsList = <Spinner />
  } else {
    reviewsList = reviews.map(review => (
      <ReviewDisplay key={review._id} review={review} auth={auth} />
    ))
  }
  return (
    <div
      className="container"
      style={{ marginTop: '25px', width: '90%', marginInlineStart: '5%' }}>
      <h3 className={`center ${classes.itineraryTitle}`}>
        {location.state.title}
      </h3>
      <div className="row">
        {displaySlider ? (
          <Slider id={match.params.id} />
        ) : (
          <>{activitiesList}</>
        )}
      </div>
      <h3 className={`center ${classes.itineraryTitle}`}>Reviews</h3>
      <hr style={{ width: '80%', marginInlineStart: '10%' }} />

      <div className="row">{reviewsList}</div>
    </div>
  )
}

const mapStateToProps = state => ({
  reviews: state.reviews,
  activities: state.activities,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getActivities, getReviews }
)(withStyles(styles)(Itinerary))
