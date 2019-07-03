import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="container">
          <div className="row">
            <div className="col s12 landing-col" style={{ marginTop: '125px' }}>
              <h4 className="white-text center common-title">MyTinerary</h4>
              <p className="white-text center common-sub-title">
                Explore new cities and connect with other travelers.
              </p>
              <hr className="landing-hr" />
              <br />
              <div className="center">
                <Link
                  style={{ margin: '5px' }}
                  to="/register"
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

export default Landing
