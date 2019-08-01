import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorMessage from '../Common/ErrorMsg'
import styles from '../../styles/ItineraryStyles'
import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateItinerary } from '../../store/actions/itineraryActions'

const EditItinerary = ({
  updateItinerary,
  itinerary,
  classes,
  displayCreate
}) => {
  const [formData, setFormData] = useState({
    img: '',
    city: '',
    title: '',
    price: '',
    duration: '',
    description: ''
  })

  useEffect(() => {
    let sel = document.querySelectorAll('select')
    M.FormSelect.init(sel)

    setFormData({
      img: itinerary.img,
      city: itinerary.city,
      title: itinerary.title,
      price: itinerary.price,
      duration: itinerary.duration,
      description: itinerary.description
    })
  }, [
    itinerary.img,
    itinerary.city,
    itinerary.title,
    itinerary.price,
    itinerary.duration,
    itinerary.description
  ])
  const { img, city, title, description, price, duration } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    updateItinerary(formData, itinerary._id)
  }
  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.formCard}`}>
        <form
          onSubmit={e =>
            onSubmit(e).then(() => {
              displayCreate()
            })
          }>
          <ErrorMessage />
          <h4 className={`center red-text text-lighten-2 ${classes.cardTitle}`}>
            Edit / Add Details
          </h4>
          <div className="input-field">
            <small className={classes.small}>Title</small>

            <input
              type="text"
              name="title"
              value={title}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="input-field">
            <small className={classes.small}>City</small>

            <input
              type="text"
              name="city"
              value={city}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="input-field">
            <small className={classes.small}>Image</small>
            <input
              type="text"
              name="img"
              value={img}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="input-field">
            <select name="price" value={price} onChange={e => onChange(e)}>
              <option value="" disabled>
                {'Price Range'}
              </option>
              <option value={'Low'}>{'Low'}</option>
              <option value={'Medium'}>{'Medium'}</option>{' '}
              <option value={'High'}>{'High'}</option>{' '}
            </select>
          </div>

          <div className="input-field">
            <select
              name="duration"
              value={duration}
              onChange={e => onChange(e)}>
              <option value="" disabled>
                {'Duration'}
              </option>
              <option value={'1-3 Hours'}>{'1-3 Hours'}</option>
              <option value={'3-5 Hours'}>{'3-5 Hours'}</option>{' '}
              <option value={'5+ Hours'}>{'5+ Hours'}</option>{' '}
            </select>
          </div>

          <div className="input-field">
            <small className={classes.small}>Description</small>
            <input
              type="text"
              name="description"
              value={description}
              onChange={e => onChange(e)}
            />
          </div>

          <button
            className="btn red lighten-2"
            style={{ width: '100%', marginTop: '20px' }}>
            Update
          </button>
        </form>
      </div>
    </div>
  )
}

EditItinerary.propTypes = {
  updateItinerary: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  itinerary: state.itineraries.itinerary
})
export default connect(
  mapStateToProps,
  { updateItinerary }
)(withStyles(styles)(EditItinerary))
