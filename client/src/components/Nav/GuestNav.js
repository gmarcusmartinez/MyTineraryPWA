import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/NavStyles'
import { withStyles } from '@material-ui/core/styles'
import M from 'materialize-css/dist/js/materialize.min.js'

const GuestNav = ({ classes }) => {
  useEffect(() => {
    let elem = document.querySelector('.sidenav')
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    })
  }, [])
  return (
    <div>
      <nav className="nav wrapper red lighten-2 z-depth-0 ">
        <div className={classes.navContainer}>
          <a
            href="!#"
            className="button-collapse sidenav-trigger right"
            data-target="slide-out">
            <i className="fas fa-plane white-text" />
          </a>
          <ul>
            <li className="left ">
              <Link to="/" className={classes.navLink}>
                MyTinerary
              </Link>
            </li>

            <li className="right hide-on-med-and-down">
              <Link to="/sign-up" className={classes.navLink}>
                Signup
              </Link>
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
      <ul className="sidenav" id="slide-out">
        <header className={classes.sideHeader}>
          <Link to="/" className={classes.sideTitle}>
            MyTinerary
          </Link>
        </header>
        <li className={classes.sidenavClose} style={{ marginTop: '25px' }}>
          <Link className={classes.navLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <div className={`divider ${classes.navDivider}`} />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/cities">
            Cities
          </Link>
        </li>
        <li>
          <div className={`divider ${classes.navDivider}`} />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/sign-up">
            Signup
          </Link>
        </li>
        <li>
          <div className={`divider ${classes.navDivider}`} />
        </li>
        <li className={classes.sidenavClose}>
          <Link className={classes.navLink} to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withStyles(styles)(GuestNav)
