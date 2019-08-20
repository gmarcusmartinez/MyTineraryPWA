import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Switch = ({ toggle }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div
      className="hide-on-med-and-up"
      style={{ display: 'flex', flexDirection: 'row' }}>
      <p
        style={{
          color: isDarkMode ? 'white' : 'black',
          fontFamily: 'Caveat',
          fontSize: '24px',
          marginTop: '0'
        }}>
        Slider
      </p>
      <div className="switch" style={{ marginTop: '6px' }}>
        <label>
          <input type="checkbox" onChange={() => toggle()} />
          <span className="lever" />
        </label>
      </div>
    </div>
  )
}

export default Switch
