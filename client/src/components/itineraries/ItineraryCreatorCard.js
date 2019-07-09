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
    <div className="card" style={{ padding: '10px' }}>
      <span className="card-title">
        {title}
        <i
          onClick={e => getItinerary(_id)}
          data-target="itinerary-edit"
          className="fas fa-pencil-alt red-text text-lighten-2 city-creator-btn right modal-trigger"
        />
        <i
          onClick={e => deleteItinerary(_id)}
          className="fas fa-trash-alt red-text text-lighten-2 city-creator-btn right"
        />
      </span>
    </div>
  )
}

export default connect(
  null,
  { deleteItinerary, getItinerary }
)(ItineraryCreatorCard)
