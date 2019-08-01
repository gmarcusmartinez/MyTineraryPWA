import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
const styles = {
  itineraryLink: {
    color: 'white',
    '&:hover': {
      color: '#e57373'
    }
  }
}
const ItineraryDisplay = ({ itinerary, classes }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img
            src={itinerary.img}
            alt="brokenLink"
            style={{ filter: 'brightness(60%)' }}
          />
          <span className={'card-title'}>
            <Link
              to={{
                pathname: `/itinerary/${itinerary._id}`,
                state: {
                  title: itinerary.title
                }
              }}
              className={classes.itineraryLink}>
              {itinerary.title}
            </Link>
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
