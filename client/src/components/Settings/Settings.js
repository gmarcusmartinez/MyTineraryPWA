import words from '../../utils/languages'
import React, { useEffect, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ThemeContext } from '../../context/ThemeContext'
import { LanguageContext } from '../../context/LanguageContext'

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
  const { language, changeLanguage } = useContext(LanguageContext)

  const { settingsDynamic, languageDynamic, modeDynamic, light, dark } = words[
    language
  ]

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
        {settingsDynamic}
      </h4>
      <p
        className={classes.subTitle}
        style={{ color: isDarkMode ? 'white' : 'black' }}>
        {languageDynamic}
      </p>
      <div className="input-field">
        <select name="language" onChange={changeLanguage} value={language}>
          <option value={'english'}>{'English'}</option>
          <option value={'spanish'}>{'Spanish'}</option>å
          <option value={'french'}>{'French'}</option>å
          <option value={'german'}>{'German'}</option>å
        </select>
      </div>
      <p
        className={classes.subTitle}
        style={{
          marginTop: '40px',
          marginBottom: '0px',
          color: isDarkMode ? 'white' : 'black'
        }}>
        {modeDynamic}
      </p>

      <div className="switch">
        <label>
          {light}
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="lever" />
          {dark}
        </label>
      </div>
    </div>
  )
}

export default withStyles(styles)(Settings)
