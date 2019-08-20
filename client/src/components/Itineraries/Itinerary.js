import Map from '../Map/Map'
import { connect } from 'react-redux'
import Switch from '../Common/Switch'
import Spinner from '../Common/Spinner'
import CreateReview from '../Forms/CreateReview'
import styles from '../../styles/ItineraryStyles'
import React, { useEffect, useContext } from 'react'
import ReviewDisplay from '../Reviews/ReviewDisplay'
import { withStyles } from '@material-ui/core/styles'
import ActivitySlider from '../Sliders/ActivitySlider'
import useToggleState from '../../hooks/useToggleState'
import { ThemeContext } from '../../context/ThemeContext'
import ActivityDisplay from '../Activities/ActivityDisplay'
import { getReviews } from '../../store/actions/reviewActions'

import { getActivities } from '../../store/actions/activityActions'

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
  const { isDarkMode } = useContext(ThemeContext)
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
    reviewsList = reviews.map((review, i) => (
      <ReviewDisplay key={review._id} review={review} auth={auth} index={i} />
    ))
  }
  return (
    <div className="container">
      <h3
        className={`center ${classes.itineraryTitle}`}
        style={{ color: isDarkMode ? 'white' : '#e57373' }}>
        {location.state.title}
      </h3>

      <Switch toggle={toggle} />

      {displaySlider ? (
        <ActivitySlider id={match.params.id} />
      ) : (
        <div className="row">{activitiesList}</div>
      )}
      <div className="row">
        <div className="col s12 m6">
          <Map />
        </div>
        <div className="col s12 m6">
          {auth.isAuthenticated && (
            <button
              className={`btn btn-flat modal-trigger ${classes.reviewBtn}`}
              data-target="create-review">
              Leave a Review
            </button>
          )}
          <h3 className={`center ${classes.itineraryTitle}`}>Reviews</h3>
          <hr style={{ width: '80%', marginInlineStart: '10%' }} />
          {reviewsList}
        </div>
      </div>
      <CreateReview itinerary_id={match.params.id} />
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
