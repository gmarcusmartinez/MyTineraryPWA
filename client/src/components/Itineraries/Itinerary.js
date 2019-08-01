import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ActivityDisplay from '../Activities/ActivityDisplay'
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
  match,
  classes,
  location,
  getActivities,
  activities: { activities, loading }
}) => {
  useEffect(() => {
    getActivities(match.params.id)
  }, [getActivities, match.params.id])

  let activitiesList
  if (activities === null || loading) {
    activitiesList = <Spinner />
  } else {
    activitiesList = activities.map(activity => (
      <ActivityDisplay key={activity._id} activity={activity} />
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
        <div className="col s12">{activitiesList}</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  activities: state.activities
})

export default connect(
  mapStateToProps,
  { getActivities }
)(withStyles(styles)(Itinerary))
