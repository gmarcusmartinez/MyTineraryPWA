import React, { useState } from 'react'
import { connect } from 'react-redux'
import ErrorMsg from '../Common/ErrorMsg'
import styles from '../../styles/ReviewDisplayStyles'
import { withStyles } from '@material-ui/core/styles'
import { createReview } from '../../store/actions/reviewActions'

const CreateReview = ({ itinerary_id, classes }) => {
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
    <div className="col s12 m6 l6">
      <div className={`card ${classes.createReviewCard}`}>
        <ErrorMsg />
        <form onSubmit={e => onSubmit(e)} />
        <div className="input-field">
          <input
            type="text"
            name="text"
            value={text}
            onChange={e => onChange(e)}
          />
        </div>
        <button
          className="btn-flat white red-text text-lighten-2 "
          style={{
            fontSize: '14px',
            fontFamily: 'Caveat',
            padding: '0',
            display: 'inline-block'
          }}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default connect(
  null,
  { createReview }
)(withStyles(styles)(CreateReview))
