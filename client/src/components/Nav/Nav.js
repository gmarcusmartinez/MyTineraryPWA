import React from 'react'
import AuthNav from './AuthNav'
import GuestNav from './GuestNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Nav = ({ auth: { isAuthenticated, loading, user } }) => {
  return (
    <div>
      {isAuthenticated && !loading ? <AuthNav user={user} /> : <GuestNav />}
    </div>
  )
}
Nav.propTypes = {
  user: PropTypes.object,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  {}
)(Nav)
