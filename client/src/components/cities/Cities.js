import CityCard from './CityCard'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getCities } from '../../store/actions/cityActions'

class Cities extends Component {
  componentDidMount() {
    this.props.getCities()
  }

  render() {
    let cityList
    const { cities } = this.props
    if (cities) {
      cityList = cities.map(({ name, img, _id }) => {
        return (
          <Link to={`/cities/${name}`} key={_id}>
            <CityCard name={name} img={img} />
          </Link>
        )
      })
    } else {
      cityList = <p>Loading</p>
    }
    return (
      <div className="container" style={{ marginTop: '74px' }}>
        {cityList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cities: state.cities.cities
})

export default connect(
  mapStateToProps,
  { getCities }
)(Cities)
