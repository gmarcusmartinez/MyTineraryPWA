import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import EditItinerary from './EditItinerary'
import ItineraryCard from './ItineraryCard'
import CreateItinerary from './CreateItinerary'
import React, { useEffect, useState } from 'react'
import useToggleState from '../../hooks/useToggleState'
import { getAuthUserItineraries } from '../../store/actions/itineraryActions'

const MyTineraries = ({
  getAuthUserItineraries,
  itineraries: { itineraries, loading }
}) => {
  const [showCreate, setShowCreate] = useState(true)
  const [showEdit, setShowEdit] = useState(false)

  const displayEdit = () => {
    setShowCreate(false)
    setShowEdit(true)
  }
  const displayCreate = () => {
    setShowCreate(true)
    setShowEdit(false)
  }

  useEffect(() => {
    getAuthUserItineraries()
  }, [getAuthUserItineraries])

  let itinerariesList
  if (itineraries === null || loading) {
    itinerariesList = <Spinner />
  } else {
    itinerariesList = itineraries.map(itinerary => {
      return (
        <ItineraryCard
          itinerary={itinerary}
          key={itinerary._id}
          displayEdit={displayEdit}
        />
      )
    })
  }

  return (
    <div className="custom-container">
      <div className="row">
        {showCreate && <CreateItinerary />}
        {showEdit && <EditItinerary displayCreate={displayCreate} />}

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
