import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserAvatar from '../Common/UserAvatar'
import React, { useEffect } from 'react'
import styles from '../../styles/NavStyles'
import { withStyles } from '@material-ui/core/styles'
import { logout } from '../../store/actions/authActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const AuthNav = ({ user, classes, logout }) => {
  useEffect(() => {
    let elem = document.querySelector('.sidenav')
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    })
  }, [])

  return (
    <div>
      <nav className="nav wrapper red lighten-2 z-depth-0">
        <div className={classes.navContainer}>
          <a
            href="!#"
            className="button-collapse sidenav-trigger right"
            data-target="slide-out">
            <i className="fas fa-plane white-text" />
          </a>
          <ul>
            <li className="right hide-on-med-and-down">
              <Link className={classes.navLink} to="/cities">
                Cities
              </Link>
            </li>
            <li className="right hide-on-med-and-down">
              <Link className={classes.navLink} to="/mytineraries">
                MyTineraries
              </Link>
            </li>
            <li />
            <li className="right hide-on-med-and-down">
              <Link className={classes.navLink} to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li />
            <li className="right hide-on-med-and-down">
              <Link className={classes.navLink} to="/settings">
                Settings
              </Link>
            </li>
            <li />
            <li className="right hide-on-med-and-down">
              <Link className={classes.navLink} onClick={logout} to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="slide-out">
        <li>{user && <UserAvatar img={user.img} />}</li>

        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/cities">
            Cities
          </Link>
        </li>
        <div className="divider nav-divider" />
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/mytineraries">
            MyTineraries
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/settings">
            Settings
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} onClick={logout} to="/">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}
AuthNav.propTypes = {
  logout: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(AuthNav))
