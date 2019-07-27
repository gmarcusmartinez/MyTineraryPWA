import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { setError } from './errActions'
import { SIGNUP, AUTH_ERROR, SET_USER, LOGIN, LOGOUT } from './types'

export const signup = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/users/', formData, config)
    dispatch({
      type: SIGNUP,
      payload: res.data
    })
    dispatch(setUser())
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
    dispatch({
      type: AUTH_ERROR
    })
  }
}
export const login = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/users/login', formData, config)
    dispatch({
      type: LOGIN,
      payload: res.data
    })
    dispatch(setUser())
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const setUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  try {
    const res = await axios.get('/users/')
    dispatch({
      type: SET_USER,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
    console.log(err.message)
  }
}

export const logout = () => dispatch => {
  try {
    dispatch({
      type: LOGOUT
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
    console.log(err.message)
  }
}
