import { connect } from 'react-redux'
import React from 'react'
import Spinner from '../Common/Spinner'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import ActivityListItem from './ActvityListItem'

const ActivitiesList = ({
  classes,
  activities: { activities, loading },
  displayConfirmDeleteAct,
  displayEditAct
}) => {
  let activitiesList
  if (activities === null || loading) {
    activitiesList = <Spinner />
  } else {
    activitiesList = activities.map(activity => (
      <ActivityListItem
        id={activity._id}
        title={activity.title}
        key={activity._id}
        displayConfirmDeleteAct={displayConfirmDeleteAct}
        displayEditAct={displayEditAct}
      />
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
  activities: state.activities
})

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(ActivitiesList))
