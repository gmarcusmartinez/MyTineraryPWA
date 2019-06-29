import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getCities } from '../../store/actions/cityActions'

class Cities extends Component {
  componentDidMount() {
    this.props.getCities()
  }

  render() {
    let cityList
    const { cities } = this.props
    if (cities) {
      cityList = cities.map(city => {
        return (
          <div key={city._id}>
            <p>{city.name}</p>
          </div>
        )
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
