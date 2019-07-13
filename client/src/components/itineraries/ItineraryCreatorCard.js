import React from 'react'
import { connect } from 'react-redux'
import {
  deleteItinerary,
  getItinerary
} from '../../store/actions/itineraryActions'

const ItineraryCreatorCard = ({
  title,
  _id,
  deleteItinerary,
  getItinerary
}) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card" style={{ padding: '10px' }}>
        <h4 className="card-title center">{title}</h4>
        <div className="center">
          <i
            onClick={e => getItinerary(_id)}
            data-target="itinerary-edit"
            className="fas fa-pencil-alt red-text text-lighten-2 city-creator-btn  modal-trigger"
          />
          <i
            onClick={e => deleteItinerary(_id)}
            className="fas fa-trash-alt red-text text-lighten-2  city-creator-btn "
          />
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { deleteItinerary, getItinerary }
)(ItineraryCreatorCard)
