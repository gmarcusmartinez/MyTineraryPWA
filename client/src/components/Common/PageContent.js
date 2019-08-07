import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const PageContent = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext)

  const styles = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    height: '100%',
    width: '100vw',
    color: isDarkMode ? 'white' : 'black'
  }
  return <div style={styles}>{children}</div>
}

export default PageContent
