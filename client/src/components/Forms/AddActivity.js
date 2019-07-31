import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import { createActivity } from '../../store/actions/activityActions'

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
    createActivity(formData)
    setFormData({
      img: '',
      title: '',
      location: ''
    })
  }
  return (
    <form onSubmit={e => onSubmit(e)}>
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
