import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { deleteActivity } from '../../store/actions/activityActions'

const styles = {
  confirmText: {
    marginTop: '35px',
    fontFamily: 'Caveat',
    fontSize: '1.6rem',
    color: 'white'
  },
  deleteBtn: {
    width: '100%',
    color: 'white',
    backgroundColor: '#e57373',
    '&:hover': {
      backgroundColor: 'red'
    }
  }
}

const ConfirmDeleteAct = ({ classes, deleteActivity, activity }) => {
  return (
    <div>
      <p className={classes.confirmText}>
        Are you sure you want to do this? It will permanently delete the
        activity.
      </p>
      <button
        className={`btn ${classes.deleteBtn} card-title`}
        style={{ fontSize: '16px', fontFamily: 'BlinkMacSystemFont' }}
        onClick={() => deleteActivity(activity._id)}>
        Delete
      </button>
    </div>
  )
}

const maptStateToProps = state => ({
  activity: state.activities.activity
})

export default connect(
  maptStateToProps,
  { deleteActivity }
)(withStyles(styles)(ConfirmDeleteAct))
