import React from 'react'
import { connect } from 'react-redux'

const ErrorMsg = ({ errors }) =>
  errors !== null &&
  errors.length > 0 &&
  errors.map(err => (
    <p className="red-text center" key={err.id}>
      {err.msg}
    </p>
  ))

const mapStateToProps = state => ({
  errors: state.err
})

export default connect(mapStateToProps)(ErrorMsg)
