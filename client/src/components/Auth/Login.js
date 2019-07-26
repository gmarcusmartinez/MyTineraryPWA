// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import ErrorMsg from '../error/ErrorMsg'
// import { Redirect } from 'react-router-dom'
// import { login } from '../../actions/authActions'
// import React, { Fragment, useState } from 'react'

// const Login = ({ login, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })

//   const { email, password } = formData

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value })

//   const onSubmit = e => {
//     e.preventDefault()
//     login(email, password)
//   }
//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />
//   }

//   return (
//     <Fragment>
//       <div className="landing">
//         <div className="dark-overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col s12 landing-col">
//                 <div className="card auth-card">
//                   <h4 className="red-text text-lighten-2 center landing-title">
//                     Login
//                   </h4>
//                   <div className="center">
//                     <ErrorMsg />
//                   </div>

//                   <form onSubmit={e => onSubmit(e)}>
//                     <div className="input-field">
//                       <label>Email</label>
//                       <input
//                         type="text"
//                         name="email"
//                         value={email}
//                         onChange={e => onChange(e)}
//                       />
//                     </div>

//                     <div className="input-field">
//                       <label>Password</label>
//                       <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={e => onChange(e)}
//                       />
//                     </div>
//                     <button className="waves-effect waves-light btn red lighten-2 signup-button">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   )
// }
// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// }
// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(
//   mapStateToProps,
//   { login }
// )(Login)
