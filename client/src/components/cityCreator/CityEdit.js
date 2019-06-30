import { connect } from 'react-redux'
import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

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

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault()
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

export default connect(
  null,
  {}
)(CityEdit)
