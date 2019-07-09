import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItineraryEdit from './ItineraryEdit'
import ErrorMsg from '../common/ErrorMsg'
import ItineraryCreatorCard from './ItineraryCreatorCard'

import {
  createItinerary,
  getItineraries
} from '../../store/actions/itineraryActions'

class CreateItinerary extends Component {
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
    this.props.getItineraries()
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
    this.props.createItinerary(formData)
    this.setState({
      title: '',
      city: '',
      img: ''
    })
  }
  render() {
    let itineraryList
    const { itineraries } = this.props
    if (itineraries) {
      itineraryList = itineraries.map(({ title, _id }) => {
        return <ItineraryCreatorCard key={_id} title={title} _id={_id} />
      })
    } else {
      itineraryList = <p>Loading</p>
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l8 offset-l3">
            <div className="card form-card">
              <h4 className="red-text text-lighten-2 center card-title">
                Create Itinerary
              </h4>
              <form onSubmit={this.onSubmit}>
                <ErrorMsg />
                <div className="input-field">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>

                <div className="input-field">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
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
                <button className="waves-effect waves-light btn red lighten-2 wide-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {itineraryList}
        <ItineraryEdit />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  itineraries: state.itineraries.itineraries
})
export default connect(
  mapStateToProps,
  { createItinerary, getItineraries }
)(CreateItinerary)
