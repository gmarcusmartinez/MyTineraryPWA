import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
    marginTop: '20px'
  }
}

const ActvityListItem = ({ title, classes }) => {
  return (
    <div className="card-title">
      <p className={classes.listItem}>{title}</p>
      <i className={`fas fa-trash-alt ${classes.commonIcon} right`} />
      <i className={`fas fa-pencil-alt ${classes.commonIcon} right`} />
      <div className="divider nav-divider" />
    </div>
  )
}

export default withStyles(styles)(ActvityListItem)
