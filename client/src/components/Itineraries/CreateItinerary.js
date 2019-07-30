import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorMessage from '../Common/ErrorMsg'
import styles from '../../styles/ItineraryStyles'
import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import M from 'materialize-css/dist/js/materialize.min.js'
import { createItinerary } from '../../store/actions/itineraryActions'

const CreateItinerary = ({ createItinerary, classes }) => {
  const [formData, setFormData] = useState({
    img: '',
    city: '',
    title: ''
  })
  useEffect(() => {
    let sel = document.querySelectorAll('select')
    M.FormSelect.init(sel)
  }, [])
  const { img, city, title } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    createItinerary(formData)
    setFormData({
      img: '',
      city: '',
      title: ''
    })
  }

  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.formCard}`}>
        <form onSubmit={e => onSubmit(e)}>
          <ErrorMessage />
          <h4 className={`center red-text text-lighten-2 ${classes.cardTitle}`}>
            Create Itinerary
          </h4>
          <div className="input-field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="input-field">
            <select name="city" value={city} onChange={e => onChange(e)}>
              <option value="" disabled defaultValue>
                {'Choose City'}
              </option>
              <option value={'Amsterdam'}>{'Amsterdam'}</option>
              <option value={'Barcelona'}>{'Barcelona'}</option>
              <option value={'Berlin'}>{'Berlin'}</option>{' '}
              <option value={'Madrid'}>{'Madrid'}</option>{' '}
            </select>
          </div>

          <div className="input-field">
            <label>Image</label>
            <input
              type="text"
              name="img"
              value={img}
              onChange={e => onChange(e)}
            />
          </div>
          <button
            className="btn red lighten-2"
            style={{ width: '100%', marginTop: '20px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
CreateItinerary.propTypes = {
  createItinerary: PropTypes.func.isRequired
}
export default connect(
  null,
  { createItinerary }
)(withStyles(styles)(CreateItinerary))
