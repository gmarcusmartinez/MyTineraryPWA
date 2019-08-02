import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useToggleState(false)
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
