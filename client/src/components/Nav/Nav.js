import React from 'react'
import AuthNav from './AuthNav'
import GuestNav from './GuestNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Nav = ({ auth: { isAuthenticated, loading, user } }) => {
  return (
    <div>
      <nav className="nav wrapper red lighten-2 z-depth-0">
        <div style={{ width: '90%', marginLeft: '5%' }} />
        <a
          href="!#"
          className="button-collapse sidenav-trigger right"
          data-target="slide-out">
          <i className="fas fa-plane white-text" />
        </a>
        {isAuthenticated && !loading ? <AuthNav user={user} /> : <GuestNav />}
      </nav>
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
