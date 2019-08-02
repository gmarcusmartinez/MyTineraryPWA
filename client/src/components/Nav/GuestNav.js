import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import words from '../../utils/languages'
import styles from '../../styles/NavStyles'
import { withStyles } from '@material-ui/core/styles'
import Settings from '../Settings/Settings'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ThemeContext } from '../../context/ThemeContext'
import { LanguageContext } from '../../context/LanguageContext'

const GuestNav = ({ classes }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)
  const {
    settingsDynamic,
    homeDynamic,
    citiesDynamic,
    signupDynamic,
    loginDynamic
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
          <Link to="/sign-up" className={classes.navLink}>
            {signupDynamic}
          </Link>
        </li>
        <li
          className={`${
            classes.navLink
          } right hide-on-med-and-down sidenav-trigger`}
          data-target="slide-out"
          onClick={setDisplaySettings}>
          {settingsDynamic}
        </li>
        <li className="right hide-on-med-and-down">
          <Link to="/login" className={classes.navLink}>
            {loginDynamic}
          </Link>
        </li>
        <li className="right hide-on-med-and-down">
          <Link to="/cities" className={classes.navLink}>
            {citiesDynamic}
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
            <li className={classes.sidenavClose} style={{ marginTop: '75px' }}>
              <Link
                className={classes.navLink}
                to="/"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                {homeDynamic}
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
                {citiesDynamic}
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
                to="/sign-up"
                style={{ color: isDarkMode ? 'white' : 'black' }}>
                {signupDynamic}
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
                {loginDynamic}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default withStyles(styles)(GuestNav)
