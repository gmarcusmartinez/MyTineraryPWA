import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/LandingStyles'
import { withStyles } from '@material-ui/core/styles'

const Landing = ({ classes }) => {
  return (
    <div className={classes.landing}>
      <div className={classes.darkOverlay}>
        <div className="container">
          <div className="row">
            <div className="col s12 landing-col" style={{ marginTop: '125px' }}>
              <h4 className={`white-text center ${classes.commonTitle}`}>
                MyTinerary
              </h4>
              <p className={`white-text center ${classes.commonSubTitle}`}>
                Explore new cities and connect with other travelers.
              </p>
              <hr className="landing-hr" />
              <br />
              <div className="center">
                <Link
                  style={{ margin: '5px' }}
                  to="/sign-up"
                  className="btn white red-text text-lighten-2 text-lighten-2"
                  data-target="signup-modal">
                  Get Started
                </Link>
                <Link to="/cities" className="btn red lighten-2">
                  Browse Cities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Landing)
