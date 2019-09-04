import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ThemeContext } from '../../context/ThemeContext'

const HowTo = ({ classes, instruction, next, previous }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className="col s12 m6 l4">
      <div className={`card ${classes.HowToCard}`}>
        <div className="center">
          <h4
            className={`center red-text text-lighten-2 ${classes.HowToTitle}`}>
            {instruction.title}
          </h4>
          <div className="center">
            {instruction.icon ? (
              <i className={`${instruction.icon} ${classes.commonIcon}`} />
            ) : null}
          </div>
          <p
            className={`${classes.HowToText}`}
            style={{ color: isDarkMode ? 'black' : 'black' }}>
            {instruction.text}
          </p>
        </div>
      </div>
      <i
        className={`fas fa-chevron-left red-text text-lighten-2 left`}
        style={{
          fontSize: '36px',
          position: 'relative',
          bottom: '75px',
          marginLeft: '25%'
        }}
        onClick={previous}
      />
      <i
        className={`fas fa-chevron-right red-text text-lighten-2 right`}
        style={{
          fontSize: '36px',
          position: 'relative',
          bottom: '75px',
          marginRight: '25%'
        }}
        onClick={next}
      />
    </div>
  )
}
const styles = {
  HowToCard: {
    marginTop: '25px',
    padding: '1rem',
    height: '360px'
  },
  HowToTitle: {
    fontFamily: 'Amatic SC',
    fontSize: '30px',
    color: '#e57373',
    marginTop: '12px'
  },
  HowToText: {
    fontFamily: 'Amatic SC',
    fontSize: '1.5rem',
    display: 'inline'
  },
  commonIcon: {
    color: '#e57373',
    borderRadius: '50%',
    border: '1px solid #e57373',
    fontSize: '1.5rem',
    padding: '8px',
    margin: '5px',
    position: 'relative',
    boxShadow: '2px 6px #eeeeee',
    '&:hover': {
      color: 'white',
      backgroundColor: '#e57373',
      boxShadow: '1px 3px #eeeeee',
      top: '3px'
    },
    '&:active': {
      boxShadow: 'none',
      top: '6px',
      left: '2px'
    }
  }
}

export default withStyles(styles)(HowTo)
