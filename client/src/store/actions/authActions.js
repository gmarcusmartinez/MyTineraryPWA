import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import { setError } from './errActions'
import { SIGNUP, AUTH_ERROR, SET_USER } from './types'

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
