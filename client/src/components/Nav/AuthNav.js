import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import words from '../../utils/languages'
import UserAvatar from '../Common/UserAvatar'
import styles from '../../styles/NavStyles'
import Settings from '../Settings/Settings'
import { withStyles } from '@material-ui/core/styles'
import { logout } from '../../store/actions/authActions'
import { ThemeContext } from '../../context/ThemeContext'
import M from 'materialize-css/dist/js/materialize.min.js'
import React, { useEffect, useContext, useState } from 'react'
import { LanguageContext } from '../../context/LanguageContext'

const AuthNav = ({ user, classes, logout }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const {
    settingsDynamic,
    logoutDynamic,
    citiesDynamic,
    dashboardDynamic
  } = words[language]

  const [displaySettings, setDisplaySettings] = useState(false)

  useEffect(() => {
    let elem = document.querySelector('.sidenav')
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    })
  }, [])

  return (
    <div>
      <ul>
        <li className="right hide-on-med-and-down">
          <Link className={classes.navLink} to="/cities">
            {citiesDynamic}
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
            {dashboardDynamic}
          </Link>
        </li>
        <li />
        <li
          className={`${
            classes.navLink
          } right hide-on-med-and-down sidenav-trigger`}
          data-target="slide-out"
          onClick={setDisplaySettings}>
          {settingsDynamic}
        </li>
        <li />
        <li className="right hide-on-med-and-down">
          <Link className={classes.navLink} onClick={logout} to="/">
            {logoutDynamic}
          </Link>
        </li>
      </ul>

      <ul
        className="sidenav"
        id="slide-out"
        style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <header className={classes.sideHeader} />

        {displaySettings ? (
          <Settings setDisplaySettings={setDisplaySettings} />
        ) : (
          <>
            <li>{user && <UserAvatar img={user.img} />}</li>

            <li className={classes.sidenavClose}>
              <Link
                className={classes.navLink}
                to="/cities"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                {citiesDynamic}
              </Link>
            </li>
            <div
              className="divider nav-divider"
              style={{ width: '80%', marginInlineStart: '10%' }}
            />
            <li className={classes.sidenavClose}>
              <Link
                className={classes.navLink}
                to="/mytineraries"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                MyTineraries
              </Link>
            </li>
            <li>
              <div
                className="divider nav-divider"
                style={{ width: '80%', marginInlineStart: '10%' }}
              />
            </li>
            <li className={classes.sidenavClose}>
              <Link
                className={classes.navLink}
                to="/dashboard"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                {dashboardDynamic}
              </Link>
            </li>
            <li>
              <div
                className="divider nav-divider"
                style={{ width: '80%', marginInlineStart: '10%' }}
              />
            </li>
            <li
              className={classes.settingsLink}
              onClick={() => setDisplaySettings(true)}
              style={{ color: isDarkMode ? 'white' : 'black' }}>
              {settingsDynamic}
            </li>
            <li>
              <div
                className="divider nav-divider"
                style={{ width: '80%', marginInlineStart: '10%' }}
              />
            </li>
            <li className={classes.sidenavClose}>
              <Link
                className={classes.navLink}
                onClick={logout}
                to="/"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                {logoutDynamic}
              </Link>
            </li>
          </>
        )}
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
