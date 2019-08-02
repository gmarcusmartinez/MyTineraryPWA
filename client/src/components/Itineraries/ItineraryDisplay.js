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
            style={{
              filter: 'brightness(60%)',
              height: '250px',
              objectFit: 'cover'
            }}
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
                <>
                  <i
                    className="far fa-clock white-text "
                    style={{ marginRight: '6px', fontSize: '24px' }}
                  />
                  <p
                    style={{
                      fontSize: '24px',
                      color: 'white',
                      display: 'inline'
                    }}>
                    {itinerary.duration}
                  </p>
                </>
              ) : null}
              {itinerary.price !== '' ? (
                <>
                  <i
                    className="fas fa-euro-sign"
                    style={{
                      marginLeft: '12px',
                      marginRight: '6px',
                      fontSize: '24px',
                      display: 'inline'
                    }}
                  />
                  <p
                    style={{
                      fontSize: '24px',
                      color: 'white',
                      display: 'inline'
                    }}>
                    {itinerary.price}
                  </p>
                </>
              ) : null}
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(ItineraryDisplay)
