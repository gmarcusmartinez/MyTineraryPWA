import Spinner from '../Common/Spinner'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ActivityDisplay from '../Activities/ActivityDisplay'
import { getActivities } from '../../store/actions/activityActions'

const styles = {}
const ActivitySlider = ({
  id,
  getActivities,
  activities: { activities, loading }
}) => {
  useEffect(() => {
    getActivities(id)
  }, [getActivities, id])
  const [current, setCurrent] = useState(0)

  let activity
  if (activities === null || loading) {
    activity = <Spinner />
  } else {
    activity = <ActivityDisplay activity={activities[current]} />
  }
  const next = () => {
    const newIndex = current + 1
    if (newIndex === activities.length) {
      setCurrent(0)
    } else {
      setCurrent(newIndex)
    }
  }
  const previous = () => {
    const newIndex = current - 1
    if (newIndex === -1) {
      setCurrent(activities.length - 1)
    } else {
      setCurrent(newIndex)
    }
  }

  return (
    <div>
      {activity}
      <div className="center">
        <i
          className={`fas fa-chevron-left white-text left`}
          style={{
            fontSize: '36px',
            position: 'relative',
            bottom: '160px',
            marginLeft: '20px'
          }}
          onClick={previous}
        />
        <i
          className={`fas fa-chevron-right white-text right`}
          style={{
            fontSize: '36px',
            position: 'relative',
            bottom: '160px',
            marginRight: '20px'
          }}
          onClick={next}
        />
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
)(withStyles(styles)(ActivitySlider))
