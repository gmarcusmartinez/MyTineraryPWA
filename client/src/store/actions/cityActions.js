import axios from 'axios'
import { setError } from './errorActions'
import {
  GET_CITY,
  GET_CITIES,
  CREATE_CITY,
  DELETE_CITY,
  CREATE_CITY_ERROR
} from './types'
export const createCity = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/cities/', formData, config)
    dispatch({
      type: CREATE_CITY,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
    dispatch({
      type: CREATE_CITY_ERROR
    })
  }
}

export const getCities = () => async dispatch => {
  try {
    const res = await axios.get('/cities')
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
export const getCity = _id => async dispatch => {
  try {
    const res = await axios.get(`/cities/${_id}`)
    dispatch({
      type: GET_CITY,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
export const deleteCity = _id => async dispatch => {
  try {
    await axios.delete(`/cities/${_id}`)
    dispatch({
      type: DELETE_CITY,
      payload: _id
    })
  } catch (err) {}
}
