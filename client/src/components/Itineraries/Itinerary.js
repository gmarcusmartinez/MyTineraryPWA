import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import ReviewDisplay from '../Reviews/ReviewDisplay'
import { withStyles } from '@material-ui/core/styles'
import ActivitySlider from '../Sliders/ActivitySlider'
import useToggleState from '../../hooks/useToggleState'
import { ThemeContext } from '../../context/ThemeContext'
import ActivityDisplay from '../Activities/ActivityDisplay'
import { getReviews } from '../../store/actions/reviewActions'
import React, { useState, useEffect, useContext } from 'react'
import CreateReview from '../Forms/CreateReview'
import { getActivities } from '../../store/actions/activityActions'

const styles = {
  itineraryTitle: {
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
  const [displayCreateReview, setDisplayCreateReview] = useState(false)
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
  if (activities !== null || loading) {
    const itinCoords = activities.map(activity => activity.coords)
    console.log(itinCoords)
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
      <h3
        className={`center ${classes.itineraryTitle}`}
        style={{ color: isDarkMode ? 'white' : '#e57373' }}>
        {location.state.title}
      </h3>
      <div className="hide-on-med-and-up">
        <p
          style={{
            color: isDarkMode ? 'white' : 'black',
            fontFamily: 'Caveat',
            fontSize: '24px'
          }}>
          Slider{' '}
        </p>
        <div className="switch">
          <label>
            <input type="checkbox" onChange={toggle} />
            <span className="lever" />
          </label>
        </div>
      </div>

      {displaySlider ? (
        <ActivitySlider id={match.params.id} />
      ) : (
        <div className="row">{activitiesList}</div>
      )}

      <h3 className={`center ${classes.itineraryTitle}`}>Reviews</h3>
      <hr style={{ width: '80%', marginInlineStart: '10%' }} />

      {displayCreateReview && (
        <div
          className="container"
          style={{ width: '90%', marginInlineStart: '5%' }}>
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <CreateReview setDisplayCreateReview={setDisplayCreateReview} />
            </div>
          </div>
        </div>
      )}
      {auth.isAuthenticated && (
        <button
          className="btn white red-text text-lighten-2 btn-flat"
          style={{
            width: '40%',
            marginLeft: '30%',
            border: '1px solid #e57373'
          }}
          onClick={() => setDisplayCreateReview(true)}>
          Leave a Review
        </button>
      )}
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
