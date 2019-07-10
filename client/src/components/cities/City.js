import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import ItineraryCard from '../itineraries/ItineraryCard'
import { getItinerariesByCity } from '../../store/actions/itineraryActions'

class City extends Component {
  componentDidMount() {
    this.props.getItinerariesByCity(this.props.match.params.cityName)
  }

  render() {
    let itinerariesList
    const { itineraries } = this.props
    if (itineraries) {
      itinerariesList = itineraries.map(({ title, img, _id }) => {
        return (
          <Link to={`/itineraries/${_id}`} key={_id}>
            <ItineraryCard title={title} img={img} />
          </Link>
        )
      })
    } else {
      itinerariesList = <p>Loading</p>
    }
    return (
      <div className="nav-container">
        <div className="row" style={{ marginTop: '45px' }}>
          {itinerariesList}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  itineraries: state.itineraries.itineraries
})
export default connect(
  mapStateToProps,
  { getItinerariesByCity }
)(City)
