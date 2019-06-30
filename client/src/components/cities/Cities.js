import { connect } from 'react-redux'
import React, { Component } from 'react'
import CityCard from './CityCard'
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
        return <CityCard key={_id} name={name} img={img} />
      })
    } else {
      cityList = <p>Loading</p>
    }
    return <div className="container">{cityList}</div>
  }
}

const mapStateToProps = state => ({
  cities: state.cities.cities
})

export default connect(
  mapStateToProps,
  { getCities }
)(Cities)
