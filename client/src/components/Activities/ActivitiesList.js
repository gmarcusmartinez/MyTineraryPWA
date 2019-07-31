import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import Spinner from '../Common/Spinner'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import { getActivities } from '../../store/actions/activityActions'

const ActivitiesList = ({
  itinerary_id,
  classes,
  getActivities,
  activities: { activities, loading }
}) => {
  useEffect(() => {
    getActivities(itinerary_id)
  }, [itinerary_id])

  let activitiesList
  if (activities === null || loading) {
    activitiesList = <Spinner />
  } else {
    activitiesList = activities.map(activity => {
      return <p className="white-text">{activity.title}</p>
    })
  }
  return (
    <div>
      <h4 className={`center white-text ${classes.cardTitle}`}>Activities</h4>
      {activitiesList}
    </div>
  )
}

const mapStateToProps = state => ({
  activities: state.activites
})

export default connect(
  mapStateToProps,
  { getActivities }
)(withStyles(styles)(ActivitiesList))
