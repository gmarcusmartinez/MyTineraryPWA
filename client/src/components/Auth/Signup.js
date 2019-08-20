import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import words from '../../utils/languages'
import ErrorMsg from '../Common/ErrorMsg'
import { Redirect } from 'react-router-dom'
import styles from '../../styles/AuthStyles'
import React, { useState, useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { signup } from '../../store/actions/authActions'
import { setError } from '../../store/actions/errActions'
import { LanguageContext } from '../../context/LanguageContext'

const Signup = ({ setError, signup, classes, isAuthenticated }) => {
  const { language } = useContext(LanguageContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const { email, password, password2 } = formData
  const {
    signupDynamic,
    emailDynamic,
    passwordDynamic,
    confirmDynamic
  } = words[language].auth

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      setError('Passwords do not match')
    }
    signup(formData)
  }
  if (isAuthenticated) {
    return <Redirect to="/mytineraries" />
  }
  return (
    <>
      <div className={classes.landing}>
        <div className={classes.darkOverlay}>
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m2 l6 offset-l3 landing-col">
                <div className={`card ${classes.formCard}`}>
                  <form onSubmit={e => onSubmit(e)}>
                    <h4
                      className={`center red-text text-lighten-2 ${
                        classes.cardTitle
                      }`}>
                      {signupDynamic}
                    </h4>
                    <div className="center-align">
                      <ErrorMsg />
                    </div>
                    <div className="input-field">
                      <label>{emailDynamic}</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="input-field">
                      <label>{passwordDynamic}</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="input-field">
                      <label>{confirmDynamic}</label>
                      <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                      />
                    </div>

                    <button
                      className={`waves-effect waves-light btn red lighten-2 ${
                        classes.wideBtn
                      }`}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
Signup.propTypes = {
  setError: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

export default connect(
  mapStateToProps,
  { setError, signup }
)(withStyles(styles)(Signup))
