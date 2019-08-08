import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import ErrorMsg from '../Common/ErrorMsg'
import { withStyles } from '@material-ui/core/styles'
import { createActivity } from '../../store/actions/activityActions'
import getCurrentLocation from '../../utils/getCurrentLocation'

const styles = {
  cardTitle: {
    fontFamily: 'Caveat',
    fontSize: '30px',
    fontWeight: '300',
    marginTop: '12px'
  },
  locationIcon: {
    border: '1px solid white',
    borderRadius: '5px',
    fontSize: '20px',
    padding: '7px',
    backgroundColor: '#e57373',
    position: 'absolute',
    right: '2px'
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
            className={`fas fa-map-pin white-text ${classes.locationIcon}`}
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
