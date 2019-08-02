import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import words from '../../utils/languages'
import ErrorMsg from '../Common/ErrorMsg'
import { Redirect } from 'react-router-dom'
import styles from '../../styles/AuthStyles'
import React, { useContext, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { login } from '../../store/actions/authActions'
import { LanguageContext } from '../../context/LanguageContext'

const Login = ({ login, isAuthenticated, classes }) => {
  const { language } = useContext(LanguageContext)
  const { loginDynamic, emailDynamic, passwordDynamic } = words[language]

  const [formData, setFormData] = useState({
    email: 'admin@gmail.com',
    password: 'password'
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(formData)
  }
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <div className={classes.landing}>
        <div className={classes.darkOverlay}>
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m2 l6 offset-l3 landing-col">
                <div className={`card ${classes.formCard}`}>
                  <h4
                    className={`center red-text text-lighten-2 ${
                      classes.cardTitle
                    }`}>
                    {loginDynamic}
                  </h4>
                  <div className="center">
                    <ErrorMsg />
                  </div>

                  <form onSubmit={e => onSubmit(e)}>
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
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(Login))
