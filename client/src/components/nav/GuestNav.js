import React from 'react'
import { Link } from 'react-router-dom'

const GuestNav = () => {
  return (
    <div>
      <nav className="nav wrapper red lighten-2 z-depth-0 ">
        <div className="nav-container">
          <a
            href="!#"
            className="button-collapse sidenav-trigger right"
            data-target="slide-out">
            <i className="fas fa-plane white-text" />
          </a>
          <ul className="hide-on-med-and-down">
            <li className="left">
              <Link to="/" className="nav-link">
                MyTinerary
              </Link>
            </li>
            <li className="right">
              <Link to="/cities" className="nav-link">
                Cities
              </Link>
            </li>
            <li className="sidenav-close">
              <Link className="nav-link " to="/create-itinerary">
                MyTineraries
              </Link>
            </li>
            <li className="right">
              <Link to="/sign-up" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="right">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="slide-out">
        <li className="sidenav-close" style={{ marginTop: '100px' }}>
          <Link className="nav-link " to="/">
            Home
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className="sidenav-close">
          <Link className="nav-link " to="/cities">
            Cities
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className="sidenav-close">
          <Link className="nav-link " to="/create-itinerary">
            MyTineraries
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className="sidenav-close">
          <Link className="nav-link " to="/sign-up">
            Signup
          </Link>
        </li>
        <li>
          <div className="divider nav-divider" />
        </li>
        <li className="sidenav-close">
          <Link className="nav-link " to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default GuestNav
