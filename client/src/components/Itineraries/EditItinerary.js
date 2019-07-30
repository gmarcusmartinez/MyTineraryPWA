// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import styles from '../../styles/ItineraryStyles'
import { withStyles } from '@material-ui/core/styles'
// import { updateItinerary } from '../../actions/itineraryActions'

const EditItinerary = ({ itinerary, classes }) => {
  const [formData, setFormData] = useState({
    img: '',
    city: '',
    title: '',
    price: '',
    duration: '',
    description: ''
  })

  useEffect(() => {
    M.Modal.init(elem)
    let elem = document.querySelector('#edit-itinerary-modal')

    let sel = document.querySelectorAll('select')
    M.FormSelect.init(sel)

    // const { img, city, title, description, price, duration } = itinerary
    // setFormData({
    //   img,
    //   city,
    //   title,
    //   price,
    //   duration,
    //   description
    // })
  }, [itinerary])

  const { img, city, title, description, price, duration } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    console.log(formData, itinerary._id)
  }
  return (
    <div className="modal" id="edit-itinerary-modal">
      <div className="modal-content">
        <div className={`card ${classes.formCard}`}>
          <form onSubmit={e => onSubmit(e)}>
            <h4
              className={`center red-text text-lighten-2 ${classes.cardTitle}`}>
              Edit / Add Details
            </h4>
            <div className="input-field">
              <input
                type="text"
                name="title"
                value={title}
                onChange={e => onChange(e)}
              />
              <small>Title</small>
            </div>

            <div className="input-field">
              <select name="city" value={city} onChange={e => onChange(e)}>
                <option value="" disabled>
                  {'Choose City'}
                </option>
                <option value={'Amsterdam'}>{'Amsterdam'}</option>
                <option value={'Barcelona'}>{'Barcelona'}</option>
                <option value={'Berlin'}>{'Berlin'}</option>{' '}
                <option value={'Madrid'}>{'Madrid'}</option>{' '}
              </select>
            </div>

            <div className="input-field">
              <small>Image</small>
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
              <small>Description</small>
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
    </div>
  )
}

// EditItinerary.propTypes = {
//   updateItinerary: PropTypes.func.isRequired
// }
// const mapStateToProps = state => ({})
export default connect(
  null,
  {}
)(withStyles(styles)(EditItinerary))
