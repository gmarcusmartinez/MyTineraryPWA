import React from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import { getItinerary } from '../../store/actions/itineraryActions'

const ItineraryCard = ({ itinerary, classes, getItinerary }) => {
  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.itineraryCard}`}>
        <div className="card-image">
          <img
            src={itinerary.img}
            alt=""
            style={{ filter: 'brightness(60%)' }}
          />
          <span className="card-title">
            {itinerary.title}
            <div className="center">
              <i
                className={`modal-trigger fas fa-pencil-alt ${
                  classes.commonIcon
                }`}
                onClick={() => getItinerary(itinerary._id)}
                data-target="edit-itinerary-modal"
              />
              <i className={`fas fa-list ${classes.commonIcon}`} />
              <i className={`fas fa-plus ${classes.commonIcon}`} />
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getItinerary }
)(withStyles(styles)(ItineraryCard))
