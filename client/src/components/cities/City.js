import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Itinerary from '../itineraries/Itinerary'
import { getItinerariesByCity } from '../../store/actions/itineraryActions'

class City extends Component {
  componentDidMount() {
    this.props.getItinerariesByCity(this.props.match.params.cityName)
  }

  render() {
    console.log(this.props)

    let itinerariesList
    const { itineraries } = this.props
    if (itineraries) {
      itinerariesList = itineraries.map(({ title, img, _id }) => {
        return (
          <Link to={`/itineraries/${_id}`} key={_id}>
            <Itinerary title={title} />
          </Link>
        )
      })
    } else {
      itinerariesList = <p>Loading</p>
    }
    return <div>{itinerariesList}</div>
  }
}
const mapStateToProps = state => ({
  itineraries: state.itineraries.itineraries
})
export default connect(
  mapStateToProps,
  { getItinerariesByCity }
)(City)
