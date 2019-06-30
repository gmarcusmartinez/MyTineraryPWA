import { connect } from 'react-redux'
import React, { Component } from 'react'
import ErrorMsg from '../common/ErrorMsg'
import CityCreatorCard from './CityCreatorCard'
import { setError } from '../../store/actions/errorActions'
import { getCities, createCity } from '../../store/actions/cityActions'

class CityCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      country: '',
      img: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getCities()
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const formData = {
      img: this.state.img,
      name: this.state.name,
      country: this.state.country
    }
    this.props.createCity(formData)
    this.setState({
      img: '',
      name: '',
      country: ''
    })
  }
  render() {
    let cityList
    const { cities } = this.props
    if (cities) {
      cityList = cities.map(({ name, img, _id }) => {
        return <CityCreatorCard key={_id} name={name} img={img} />
      })
    } else {
      cityList = <p>Loading</p>
    }
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <ErrorMsg />
          <div className="input-field">
            <label>City Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="input-field">
            <label>Country Code</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
            />
          </div>
          <div className="input-field">
            <label>Img</label>
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.onChange}
            />
          </div>
          <button className="waves-effect waves-light btn red lighten-2 signup-button">
            Submit
          </button>
        </form>
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
  { getCities, createCity, setError }
)(CityCreator)
