import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import ErrorMsg from '../Common/ErrorMsg'
import { withStyles } from '@material-ui/core/styles'
import { createActivity } from '../../store/actions/activityActions'

const styles = {
  cardTitle: {
    fontFamily: 'Caveat',
    fontSize: '30px',
    fontWeight: '300',
    marginTop: '12px'
  },
  formIcon: {
    border: '1px solid white',
    borderRadius: '3px',
    fontSize: '20px',
    padding: '7px',
    backgroundColor: '#e57373',
    color: 'white',
    position: 'absolute',
    right: '2px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#e57373',
      border: '1px solid #e57373'
    }
  }
}

const AddActivity = ({ itinerary_id, classes, createActivity }) => {
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    location: '',
    itinerary: ''
  })
  const { img, title, location } = formData

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      itinerary: itinerary_id
    })

  const onSubmit = async e => {
    e.preventDefault()
    createActivity(formData, itinerary_id)
    setFormData({
      img: '',
      title: '',
      location: ''
    })
  }
  const getCurrentLocation = () => {
    if (!navigator.geolocation)
      setFormData({ location: 'Gelocation not supported by Browser' })

    navigator.geolocation.getCurrentPosition(position => {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?access_token=pk.eyJ1IjoiZ21hcmN1c21hcnRpbmV6IiwiYSI6ImNqdjI3OTM1aTBwcTA0M3A5dDVpYjRzdWoifQ.CTIRN-C7Fd_lhCLrGgjM1w`
        )
        .then(res => {
          setFormData({ location: res.data.features[0].place_name })
        })
    })
  }

  return (
    <form onSubmit={e => onSubmit(e)}>
      <ErrorMsg />
      <h4 className={`center white-text ${classes.cardTitle}`}>Add Activity</h4>
      <div className="col s12 reveal-data">
        <div className="input-field">
          <label className="white-text">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="input-field">
          <label className="white-text">Image</label>
          <input
            type="text"
            name="img"
            value={img}
            onChange={e => onChange(e)}
          />
          <i className={`fas fa-camera ${classes.formIcon}`} />
        </div>
        <div className="input-field">
          <label className="white-text">Location</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
          <i
            className={`fas fa-map-pin ${classes.formIcon}`}
            onClick={() => getCurrentLocation()}
          />
        </div>
      </div>
      <button
        className="btn red lighten-2"
        style={{ width: '100%', marginTop: '12px' }}>
        Submit
      </button>
    </form>
  )
}

AddActivity.propTypes = {
  createActivity: PropTypes.func.isRequired
}

export default connect(
  null,
  { createActivity }
)(withStyles(styles)(AddActivity))
