import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import words from '../../utils/languages'
import ErrorMessage from '../Common/ErrorMsg'
import styles from '../../styles/ItineraryStyles'
import React, { useState, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { LanguageContext } from '../../context/LanguageContext'
import { createItinerary } from '../../store/actions/itineraryActions'

const CreateItinerary = ({ createItinerary, classes }) => {
  const { language } = useContext(LanguageContext)
  const {
    createItineraryDynamic,
    titleDynamic,
    imageDynamic,
    cityDynamic,
    submitDynamic
  } = words[language].createItinerary

  const [formData, setFormData] = useState({
    img: '',
    city: '',
    title: ''
  })

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
            {createItineraryDynamic}
          </h4>
          <div className="input-field">
            <label>{titleDynamic}</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="input-field">
            <label>{cityDynamic}</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={e => onChange(e)}
            />
          </div>

          <div className="input-field">
            <label>{imageDynamic}</label>
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
            {submitDynamic}
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
