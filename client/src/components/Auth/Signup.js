import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorMsg from '../Common/ErrorMsg'
// import { Redirect } from 'react-router-dom'
import { signup } from '../../store/actions/authActions'
import styles from '../../styles/AuthStyles'
import React, { Fragment, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { setError } from '../../store/actions/errActions'

const Signup = ({ setError, signup, classes }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const { email, password, password2 } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      setError('Passwords do not match')
    }
    signup(formData)
  }
  //   if (isAuthenticated) {
  //     return <Redirect to="/dashboard" />
  //   }
  return (
    <Fragment>
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
                      Signup
                    </h4>
                    <div className="center-align">
                      <ErrorMsg />
                    </div>
                    <div className="input-field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="input-field">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className="input-field">
                      <label>Confirm Password</label>
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
    </Fragment>
  )
}

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })
Signup.propTypes = {
  setError: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
  // isAuthenticated: PropTypes.bool
}
// export default connect(
//   mapStateToProps,
//   { setError, register }
// )(Signup)

export default connect(
  null,
  { setError, signup }
)(withStyles(styles)(Signup))
