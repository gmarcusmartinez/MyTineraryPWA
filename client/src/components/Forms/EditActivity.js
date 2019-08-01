import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import ErrorMsg from '../Common/ErrorMsg'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
import { updateActivity } from '../../store/actions/activityActions'

const EditActivity = ({ classes, activity, updateActivity }) => {
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    location: '',
    itinerary: ''
  })
  useEffect(() => {
    setFormData({
      img: activity.img,
      title: activity.title,
      location: activity.location,
      itinerary: activity.itinerary
    })
  }, [activity.img, activity.title, activity.location, activity.itinerary])
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  const onSubmit = async e => {
    e.preventDefault()
    updateActivity(formData, activity._id)
  }
  const { img, title, location } = formData

  return (
    <form onSubmit={e => onSubmit(e)}>
      <ErrorMsg />
      <h4 className={`center white-text ${classes.cardTitle}`}>
        Edit Activity
      </h4>
      <div className="col s12 reveal-data">
        <div className="input-field">
          <small className={`${classes.small} white-text`}>Title</small>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="input-field">
          <small className={`${classes.small} white-text`}>Image</small>
          <input
            type="text"
            name="img"
            value={img}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="input-field">
          <small className={`${classes.small} white-text`}>Location</small>
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
const mapStateToProps = state => ({
  activity: state.activities.activity
})
export default connect(
  mapStateToProps,
  { updateActivity }
)(withStyles(styles)(EditActivity))
