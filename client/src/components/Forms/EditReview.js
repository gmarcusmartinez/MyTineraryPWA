import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import ErrorMsg from '../Common/ErrorMsg'
import { getReview } from '../../store/actions/reviewActions'

const EditReview = ({
  id,
  itinerary_id,
  getReview,
  reviews: { reviewsLoading, review }
}) => {
  const [formData, setFormData] = useState({
    text: '',
    itinerary: ''
  })

  useEffect(() => {
    let elem = document.querySelector('.modal')
    M.Modal.init(elem)
  }, [])

  const { text } = formData
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      itinerary: itinerary_id
    })

  const countChars = () => {
    const charNum = document.getElementById('charNum')
    const counter = document.getElementById('counter')
    counter.innerHTML = charNum.innerHTML.length + '/240'
  }
  return (
    <div
      className="modal"
      id="edit-review"
      style={{ backgroundColor: 'white' }}>
      <div className="modal-content" style={{ padding: '0' }}>
        <div className="card z-depth-0">
          <div className="card-content" style={{ paddingBottom: '10px' }}>
            <ErrorMsg />
            <form
              onSubmit={e => {
                e.preventDefault()
                setFormData({ text: '' })
              }}>
              <div className="input-field">
                <textarea
                  name="text"
                  className="materialize-textarea"
                  value={text}
                  onChange={e => onChange(e)}
                  id="charNum"
                  onKeyUp={() => countChars()}
                />
                <p
                  id="counter"
                  className="right"
                  style={{ marginBottom: '10px' }}
                />
              </div>

              <button className="btn red lighten-2" style={{ width: '100%' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
EditReview.propTypes = {
  getReview: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  reviews: state.reviews
})
export default connect(
  mapStateToProps,
  { getReview }
)(EditReview)
