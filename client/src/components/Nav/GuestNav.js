import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/NavStyles'
import { withStyles } from '@material-ui/core/styles'
import Settings from '../Settings/Settings'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ThemeContext } from '../../context/ThemeContext'

const GuestNav = ({ classes }) => {
  const { isDarkMode } = useContext(ThemeContext)
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
      <nav className="nav wrapper z-depth-0 ">
        <div className={classes.navContainer}>
          <a
            href="!#"
            className="button-collapse sidenav-trigger right"
            data-target="slide-out">
            <i className="fas fa-plane white-text" />
          </a>
          <ul>
            <li className="right hide-on-med-and-down">
              <Link to="/sign-up" className={classes.navLink}>
                Signup
              </Link>
            </li>
            <li
              className="right hide-on-med-and-down sidenav-trigger"
              data-target="slide-out">
              <a className={classes.navLink} onClick={setDisplaySettings}>
                Settings
              </a>
            </li>
            <li className="right hide-on-med-and-down">
              <Link to="/login" className={classes.navLink}>
                Login
              </Link>
            </li>
            <li className="right hide-on-med-and-down">
              <Link to="/cities" className={classes.navLink}>
                Cities
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul
        className="sidenav"
        id="slide-out"
        style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
        <header className={classes.sideHeader}>
          <Link to="/" className={classes.sideTitle}>
            MyTinerary
          </Link>
        </header>
        {displaySettings ? (
          <Settings setDisplaySettings={setDisplaySettings} />
        ) : (
          <>
            <li className={classes.sidenavClose} style={{ marginTop: '75px' }}>
              <Link
                className={classes.navLink}
                to="/"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                Home
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
                to="/cities"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                Cities
              </Link>
            </li>
            <li>
              <div
                className="divider nav-divider"
                style={{ width: '80%', marginInlineStart: '10%' }}
              />
            </li>
            <li className={classes.sidenavClose}>
              <a
                className={classes.navLink}
                onClick={() => setDisplaySettings(true)}
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                Settings
              </a>
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
                to="/sign-up"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                Signup
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
                to="/login"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default withStyles(styles)(GuestNav)
