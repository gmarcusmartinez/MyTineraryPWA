import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ErrorMsg = ({ errors }) =>
  errors !== null &&
  errors.length > 0 &&
  errors.map(err => (
    <p className="red-text center" key={err.id}>
      {err.text}
    </p>
  ))
// ErrorMsg.propTypes = {
//   errors: PropTypes.array.isRequired
// }
const mapStateToProps = state => ({
  errors: state.err
})

export default connect(mapStateToProps)(ErrorMsg)
