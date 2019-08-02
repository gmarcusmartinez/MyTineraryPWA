import Spinner from './Spinner'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ActivityDisplay from '../Activities/ActivityDisplay'
import { getActivities } from '../../store/actions/activityActions'

const styles = {}
const Slider = ({ id, getActivities, activities: { activities, loading } }) => {
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
      <button
        className={`btn-flat red-text text-lighten-2`}
        onClick={previous}
        style={{ marginLeft: '20px' }}>
        <i
          className={`far fa-arrow-alt-circle-left`}
          style={{ fontSize: '36px' }}
        />
      </button>
      <button
        className={`btn-flat red-text text-lighten-2 right`}
        onClick={next}
        style={{ marginRight: '20px' }}>
        <i
          className={`far fa-arrow-alt-circle-right`}
          style={{ fontSize: '36px' }}
        />
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  activities: state.activities
})
export default connect(
  mapStateToProps,
  { getActivities }
)(withStyles(styles)(Slider))
