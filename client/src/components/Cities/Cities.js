import CityCard from './CityCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../Common/Spinner'
import CitySearch from '../Common/CitySearch'
import React, { Fragment, useEffect } from 'react'
import { getCities } from '../../store/actions/cityActions'

const Cities = ({ getCities, cities: { cities, loading } }) => {
  useEffect(() => {
    getCities()
  }, [getCities])

  let cityList
  if (cities === null || loading) {
    cityList = <Spinner />
  } else if (cities.length === 0) {
    cityList = <p className="center">There are currently no cities.</p>
  } else {
    cityList = cities.map(({ name, img, _id }) => {
      return (
        <Link to={`/cities/${name}`} key={_id}>
          <CityCard name={name} img={img} />
        </Link>
      )
    })
  }
  return (
    <Fragment>
      <CitySearch />
      <div
        className="container"
        style={{ width: '90%', marginInLineStart: '5%' }}>
        <div className="row">{cityList}</div>
      </div>
    </Fragment>
  )
}
const mapStateToProps = state => ({
  cities: state.cities
})
Cities.propTypes = {
  cities: PropTypes.object.isRequired,
  getCities: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { getCities }
)(Cities)
