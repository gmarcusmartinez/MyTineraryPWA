import React, { useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ThemeContext } from '../../context/ThemeContext'

const styles = {
  title: {
    fontFamily: 'Caveat'
  },
  subTitle: {
    fontFamily: 'Caveat',
    fontSize: '16px'
  }
}

const Settings = ({ classes, setDisplaySettings }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    let sel = document.querySelectorAll('select')
    M.FormSelect.init(sel)
  }, [])
  return (
    <div className="container" style={{ width: '80%', marginLeft: '10%' }}>
      <i
        className="fas fa-times "
        style={{
          color: isDarkMode ? 'white' : 'black',
          position: 'absolute',
          top: '50px',
          right: '5px'
        }}
        onClick={() => setDisplaySettings(false)}
      />
      <h4
        className={`${classes.title} center`}
        style={{
          marginBottom: '35px',
          color: isDarkMode ? 'white' : 'black'
        }}>
        Settings
      </h4>
      <p
        className={classes.subTitle}
        style={{ color: isDarkMode ? 'white' : 'black' }}>
        Language
      </p>
      <div className="input-field">
        <select name="language">
          <option value={'English'}>{'English'}</option>
          <option value={'Spanish'}>{'Spanish'}</option>å
          <option value={'French'}>{'French'}</option>å
          <option value={'German'}>{'German'}</option>å
        </select>
      </div>
      <p
        className={classes.subTitle}
        style={{
          marginTop: '50px',
          color: isDarkMode ? 'white' : 'black'
        }}>
        Mode
      </p>

      <div className="switch">
        <label>
          Light
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="lever" />
          Dark
        </label>
      </div>
    </div>
  )
}

export default withStyles(styles)(Settings)
