import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import React, { useEffect } from 'react'
import ItineraryDisplay from '../Itineraries/ItineraryDisplay'
import { getItinerariesByCity } from '../../store/actions/itineraryActions'

const City = ({
  match,
  getItinerariesByCity,
  itineraries: { itineraries, loading }
}) => {
  useEffect(() => {
    getItinerariesByCity(match.params.cityName)
  }, [getItinerariesByCity, match.params.cityName])

  let itinerariesList

  if (itineraries === null || loading) {
    itinerariesList = <Spinner />
  } else if (itineraries.length === 0) {
    itinerariesList = <p>This city currently has no itineraries</p>
  } else {
    itinerariesList = itineraries.map(itinerary => {
      return <ItineraryDisplay key={itinerary._id} itinerary={itinerary} />
    })
  }

  return (
    <div
      className="container"
      style={{ marginTop: '25px', width: '90%', marginInlineStart: '5%' }}>
      <div className="row">
        <div className="col s12">{itinerariesList}</div>
      </div>
    </div>
  )
}

City.propTypes = {
  itineraries: PropTypes.object.isRequired,
  getItinerariesByCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  itineraries: state.itineraries
})

export default connect(
  mapStateToProps,
  { getItinerariesByCity }
)(City)
