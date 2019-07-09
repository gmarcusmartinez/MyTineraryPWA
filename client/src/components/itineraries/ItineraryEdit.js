import { connect } from 'react-redux'
import React, { Component } from 'react'
import ErrorMsg from '../common/ErrorMsg'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateItinerary } from '../../store/actions/itineraryActions'

class ItineraryEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      city: '',
      img: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    let elem = document.querySelector('#itinerary-edit')
    M.Modal.init(elem)
  }
  componentDidUpdate(prevProps) {
    if (this.props.itinerary !== prevProps.itinerary) {
      this.setState({
        title: this.props.itinerary.title,
        city: this.props.itinerary.city,
        img: this.props.itinerary.img
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
      title: this.state.title,
      city: this.state.city,
      img: this.state.img
    }
    this.props.updateItinerary(formData, this.props.itinerary._id)
    let elem = document.querySelector('#itinerary-edit')
    const instance = M.Modal.getInstance(elem)
    setTimeout(() => {
      if (this.props.errors.length === 0) {
        instance.close()
      }
    }, 1000)
  }
  render() {
    return (
      <div className="modal" id="itinerary-edit">
        <div className="modal-content">
          <div className="card city-edit-card z-depth-0">
            <h4 className="red-text text-lighten-2 center card-title">
              Edit Itinerary
            </h4>
            <form onSubmit={this.onSubmit}>
              <ErrorMsg />
              <div className="input-field">
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
                <small>Title</small>
              </div>

              <div className="input-field">
                <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                <small>City</small>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="img"
                  value={this.state.img}
                  onChange={this.onChange}
                />
                <small>Img</small>
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
  itinerary: state.itineraries.itinerary,
  errors: state.err
})
export default connect(
  mapStateToProps,
  { updateItinerary }
)(ItineraryEdit)
