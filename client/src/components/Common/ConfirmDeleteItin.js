import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { deleteItinerary } from '../../store/actions/itineraryActions'

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

const ConfirmDeleteItin = ({ itinerary_id, classes, deleteItinerary }) => {
  return (
    <div>
      <p className={classes.confirmText}>
        Are you sure you want to do this? It will permanently delete the
        itinerary along with all activities you have added to it, as well as
        reviews others have left you.
      </p>
      <button
        className={`btn ${classes.deleteBtn}`}
        onClick={() => deleteItinerary(itinerary_id)}>
        Delete
      </button>
    </div>
  )
}

export default connect(
  null,
  { deleteItinerary }
)(withStyles(styles)(ConfirmDeleteItin))
