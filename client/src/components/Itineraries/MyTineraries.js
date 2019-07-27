import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import ItineraryCard from './ItineraryCard'
import CreateItinerary from './CreateItinerary'
import EditItinerary from './EditItinerary'
import { getAuthUserItineraries } from '../../store/actions/itineraryActions'
const MyTineraries = ({
  getAuthUserItineraries,
  itineraries: { itineraries, loading }
}) => {
  useEffect(() => {
    getAuthUserItineraries()
  }, [getAuthUserItineraries])

  let itinerariesList
  if (itineraries === null || loading) {
    itinerariesList = <Spinner />
  } else {
    itinerariesList = itineraries.map(itinerary => {
      return <ItineraryCard itinerary={itinerary} key={itinerary._id} />
    })
  }
  return (
    <div className="custom-container">
      <div className="row">
        <CreateItinerary />
        {itinerariesList}
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  itineraries: state.itineraries
})

MyTineraries.propTypes = {
  itineraries: PropTypes.object.isRequired,
  getAuthUserItineraries: PropTypes.func.isRequired
}
export default connect(
  mapStateToProps,
  { getAuthUserItineraries }
)(MyTineraries)
