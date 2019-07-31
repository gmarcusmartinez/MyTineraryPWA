import React from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import AddActivity from '../Forms/AddActivity'
import {
  getItinerary,
  deleteItinerary
} from '../../store/actions/itineraryActions'

const ItineraryCard = ({
  itinerary,
  classes,
  getItinerary,
  deleteItinerary
}) => {
  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.itineraryCard}`}>
        <div className="card-image">
          <img
            src={itinerary.img}
            alt=""
            style={{ filter: 'brightness(60%)' }}
          />
          <span className="card-title">{itinerary.title}</span>
        </div>
        <div className="card-content">
          <div className="center">
            <i
              className={`modal-trigger fas fa-pencil-alt ${
                classes.commonIcon
              }`}
              onClick={() => getItinerary(itinerary._id)}
            />
            <i className={`fas fa-list ${classes.commonIcon}`} />
            <i className={`fas fa-plus ${classes.commonIcon} activator`} />
            <i
              className={`fas fa-trash-alt ${classes.commonIcon}`}
              onClick={() => deleteItinerary(itinerary._id)}
            />
          </div>
        </div>

        <div className="card-reveal" id="card-reveal">
          <span className="card-title">
            <i
              className="fas fa-times white-text right"
              style={{ fontSize: '1.5rem' }}
            />
          </span>
          <AddActivity />
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { getItinerary, deleteItinerary }
)(withStyles(styles)(ItineraryCard))
