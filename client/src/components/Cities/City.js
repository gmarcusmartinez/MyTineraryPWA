import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../Common/Spinner'
import React, { useEffect, useContext } from 'react'
import useToggleState from '../../hooks/useToggleState'
import ItinerarySlider from '../Sliders/ItinerarySlider'
import { ThemeContext } from '../../context/ThemeContext'
import ItineraryDisplay from '../Itineraries/ItineraryDisplay'
import { getItinerariesByCity } from '../../store/actions/itineraryActions'

const City = ({
  match,
  getItinerariesByCity,
  itineraries: { itineraries, loading }
}) => {
  const [displaySlider, toggle] = useToggleState(false)
  const { isDarkMode } = useContext(ThemeContext)

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
      <div className="hide-on-med-and-up">
        <p
          style={{
            color: isDarkMode ? 'white' : 'black',
            fontFamily: 'Caveat',
            fontSize: '24px'
          }}>
          Slider{' '}
        </p>
        <div className="switch">
          <label>
            <input type="checkbox" onChange={toggle} />
            <span className="lever" />
          </label>
        </div>
      </div>
      {displaySlider ? (
        <ItinerarySlider cityName={match.params.cityName} />
      ) : (
        <div className="row">{itinerariesList}</div>
      )}{' '}
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
