import Spinner from '../Common/Spinner'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ItineraryDisplay from '../Itineraries/ItineraryDisplay'
import { getItinerariesByCity } from '../../store/actions/itineraryActions'

const styles = {}
const ItinerarySlider = ({
  cityName,
  getItinerariesByCity,
  itineraries: { itineraries, loading }
}) => {
  useEffect(() => {
    getItinerariesByCity(cityName)
  }, [getItinerariesByCity, cityName])
  const [current, setCurrent] = useState(0)

  let itinerary
  if (itineraries === null || loading) {
    itinerary = <Spinner />
  } else {
    itinerary = <ItineraryDisplay itinerary={itineraries[current]} />
  }
  const next = () => {
    const newIndex = current + 1
    if (newIndex === itineraries.length) {
      setCurrent(0)
    } else {
      setCurrent(newIndex)
    }
  }
  const previous = () => {
    const newIndex = current - 1
    if (newIndex === -1) {
      setCurrent(itineraries.length - 1)
    } else {
      setCurrent(newIndex)
    }
  }

  return (
    <div>
      {itinerary}
      <div className="center">
        <i
          className={`fas fa-chevron-left white-text left`}
          style={{
            fontSize: '36px',
            position: 'relative',
            bottom: '160px',
            marginLeft: '20px'
          }}
          onClick={previous}
        />
        <i
          className={`fas fa-chevron-right white-text right`}
          style={{
            fontSize: '36px',
            position: 'relative',
            bottom: '160px',
            marginRight: '20px'
          }}
          onClick={next}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  itineraries: state.itineraries
})
export default connect(
  mapStateToProps,
  { getItinerariesByCity }
)(withStyles(styles)(ItinerarySlider))
