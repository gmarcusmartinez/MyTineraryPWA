import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import Spinner from '../Common/Spinner'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import ActivityListItem from './ActvityListItem'
import { log } from 'util'

const ActivitiesList = ({
  itinerary_id,
  classes,
  activities: { activities, loading }
}) => {
  let activitiesList
  if (activities === null || loading) {
    activitiesList = <Spinner />
  } else {
    activitiesList = activities.map(activity => (
      <ActivityListItem title={activity.title} key={activity._id} />
    ))
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
  {}
)(withStyles(styles)(ActivitiesList))
