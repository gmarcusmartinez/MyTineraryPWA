import React from 'react'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'

const ItineraryDisplay = ({ itinerary }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img
            src={itinerary.img}
            alt="brokenLink"
            style={{ filter: 'brightness(60%)' }}
          />
          <span className="card-title">
            {itinerary.title}
            <div>
              {itinerary.duration !== '' ? (
                <div style={{ fontSize: '24px' }}>
                  <i
                    className="far fa-clock white-text "
                    style={{ marginRight: '6px', fontSize: '24px' }}
                  />
                  {itinerary.duration}
                </div>
              ) : null}
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(ItineraryDisplay)
