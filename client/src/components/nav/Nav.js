import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          MyTinerary
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/city-creator">City Creator</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
