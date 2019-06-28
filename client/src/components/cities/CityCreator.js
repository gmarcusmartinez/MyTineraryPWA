// import { connect } from 'react-redux'
import React, { Component } from 'react'
// import { getCities } from '../../actions/cityActions'

class CityCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityName: '',
      country: '',
      img: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    // this.props.getCities()
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      img: '',
      cityName: '',
      country: ''
    })
  }
  render() {
    let cityList
    // const { cities } = this.props.cities
    // if (cities === null) {
    //   cityList = <p>Loading</p>
    // } else {
    //   console.log(cities)
    //   cityList = cities.map(city => {
    //     return <p key={city._id}>{city.cityName}</p>
    //   })
    // }
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <label>City Name</label>
            <input
              type="text"
              name="name"
              value={this.state.cityName}
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
  // cities: state.cities
})
// export default connect(
//   mapStateToProps,
//   {}
// )(CityCreator)
export default CityCreator
