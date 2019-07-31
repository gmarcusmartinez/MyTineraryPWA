import axios from 'axios'
import {
  GET_ITINERARY,
  CREATE_ITINERARY,
  GET_ITINERARIES,
  DELETE_ITINERARY,
  UPDATE_ITINERARY,
  GET_AUTH_USER_ITINERARIES
} from './types'
import { setError } from './errActions'

export const getAuthUserItineraries = () => async dispatch => {
  try {
    const res = await axios.get('/itineraries/')
    dispatch({
      type: GET_AUTH_USER_ITINERARIES,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}

export const getItinerariesByCity = cityName => async dispatch => {
  try {
    const res = await axios.get(`/itineraries/city/${cityName}`)
    dispatch({
      GET_ITINERARIES,
      paylod: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}

export const getItinerary = id => async dispatch => {
  try {
    const res = await axios.get(`/itineraries/${id}`)
    dispatch({
      type: GET_ITINERARY,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}

export const createItinerary = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/itineraries/', formData, config)
    dispatch({
      type: CREATE_ITINERARY,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const updateItinerary = (formData, _id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.patch(`/itineraries/${_id}`, formData, config)
    dispatch({
      type: UPDATE_ITINERARY,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const deleteItinerary = id => async dispatch => {
  try {
    await axios.delete(`/itineraries/${id}`)
    dispatch({
      type: DELETE_ITINERARY,
      payload: id
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
