import { connect } from 'react-redux'
import React, { Component } from 'react'
import ErrorMsg from '../common/ErrorMsg'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateCity } from '../../store/actions/cityActions'
import { setError } from '../../store/actions/errorActions'

class CityEdit extends Component {
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
    let elem = document.querySelector('#city-edit')
    M.Modal.init(elem)
  }
  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({
        name: this.props.city.name,
        country: this.props.city.country,
        img: this.props.city.img
      })
    }
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
    this.props.updateCity(formData, this.props.city._id)
    let elem = document.querySelector('#city-edit')
    const instance = M.Modal.getInstance(elem)
    if (this.props.errors.length !== 0) {
      instance.close()
    }
  }
  render() {
    return (
      <div className="modal" id="city-edit">
        <div className="modal-content">
          <div className="card city-edit-card z-depth-0">
            <h4 className="red-text text-lighten-2 center city-creator-card-title">
              Edit City
            </h4>
            <form onSubmit={this.onSubmit}>
              <ErrorMsg />
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <small>City Name</small>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                />
                <small>Country Code</small>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="img"
                  value={this.state.img}
                  onChange={this.onChange}
                />
                <small>Image</small>
              </div>
              <button className="waves-effect waves-light btn red lighten-2 wide-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  city: state.cities.city,
  errors: state.err
})
export default connect(
  mapStateToProps,
  { updateCity, setError }
)(CityEdit)
