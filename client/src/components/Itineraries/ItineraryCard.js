import React from 'react'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'

const ItineraryCard = ({ title, classes, img }) => {
  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.itineraryCard}`}>
        <div className="card-image">
          <img src={img} alt="" style={{ filter: 'brightness(60%)' }} />
          <span class="card-title">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(ItineraryCard)
