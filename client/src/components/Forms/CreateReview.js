import React, { useState } from 'react'
import { connect } from 'react-redux'
import ErrorMsg from '../Common/ErrorMsg'
import styles from '../../styles/ReviewDisplayStyles'
import { withStyles } from '@material-ui/core/styles'
import { createReview } from '../../store/actions/reviewActions'

const CreateReview = ({ setDisplayCreateReview, itinerary_id, classes }) => {
  const [formData, setFormData] = useState({
    text: ''
  })
  const { text } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      text: ''
    })
  }
  return (
    <div className={`card ${classes.createReviewCard}`}>
      <i
        className="fas fa-times"
        onClick={() => setDisplayCreateReview(false)}
        style={{ position: 'absolute', top: '-15px', right: '-5px' }}
      />
      <ErrorMsg />
      <form onSubmit={e => onSubmit(e)}>
        <div className="input-field">
          <input
            type="text"
            name="text"
            value={text}
            onChange={e => onChange(e)}
          />
        </div>
        <button
          className="btn btn-flat white red-text text-lighten-2 "
          style={{
            width: '40%',
            position: 'absolute',
            bottom: '5px',
            left: '30%',
            marginTop: '10px'
          }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createReview }
)(withStyles(styles)(CreateReview))
