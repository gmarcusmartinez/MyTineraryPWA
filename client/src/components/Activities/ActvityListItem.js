import { connect } from 'react-redux'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { getActivity } from '../../store/actions/activityActions'

const styles = {
  listItem: {
    fontFamily: 'Caveat',
    fontSize: '1.5rem',
    color: 'white',
    display: 'inline-block'
  },
  commonIcon: {
    color: 'white',
    borderRadius: '50%',
    border: '1px solid white',
    fontSize: '1.25rem',
    padding: '7px',
    marginTop: '20px',
    '&:hover': {
      color: '#e57373',
      border: '1px solid #e57373',
      backgroundColor: 'white'
    }
  }
}

const ActvityListItem = ({
  id,
  title,
  classes,
  displayConfirmDeleteAct,
  getActivity,
  displayEditAct
}) => {
  return (
    <div>
      <p className={classes.listItem}>{title}</p>
      <i
        className={`fas fa-trash-alt ${classes.commonIcon} right`}
        onClick={() =>
          getActivity(id).then(() => {
            displayConfirmDeleteAct()
          })
        }
      />
      <i
        className={`fas fa-pencil-alt ${classes.commonIcon} right`}
        onClick={() =>
          getActivity(id).then(() => {
            displayEditAct()
          })
        }
      />
      <div className="divider nav-divider" />
    </div>
  )
}

export default connect(
  null,
  { getActivity }
)(withStyles(styles)(ActvityListItem))
