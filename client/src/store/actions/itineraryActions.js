import axios from 'axios'
import { setError } from './errorActions'
import {
  GET_ITINERARY,
  GET_ITINERARIES,
  CREATE_ITINERARY,
  DELETE_ITINERARY,
  UPDATE_ITINERARY,
  GET_ITINERARIES_BY_CITY
} from './types'

export const getItinerary = _id => async dispatch => {
  try {
    const res = await axios.get(`/itineraries/${_id}`)
    dispatch({
      type: GET_ITINERARY,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
export const getItineraries = () => async dispatch => {
  try {
    const res = await axios.get('/itineraries')
    dispatch({
      type: GET_ITINERARIES,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
export const getItinerariesByCity = cityName => async dispatch => {
  try {
    const res = await axios.get(`/itineraries/city/${cityName}`)
    dispatch({
      type: GET_ITINERARIES_BY_CITY,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
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
export const deleteItinerary = _id => async dispatch => {
  try {
    await axios.delete(`/itineraries/${_id}`)
    dispatch({
      type: DELETE_ITINERARY,
      payload: _id
    })
  } catch (err) {
    console.log(err)
  }
}
