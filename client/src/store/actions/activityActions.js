import axios from 'axios'
import {
  GET_ACTIVITY,
  CREATE_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY
  // UPDATE_ACTIVITY
} from './types'

import { setError } from './errActions'

export const createActivity = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/activities/`, formData, config)
    dispatch({
      type: CREATE_ACTIVITY,
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

export const getActivities = id => async dispatch => {
  try {
    const res = await axios.get(`/activities/${id}`)
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const getActivity = id => async dispatch => {
  try {
    const res = await axios.get(`/activities/edit/${id}`)
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}

export const deleteActivity = id => async dispatch => {
  try {
    await axios.delete(`/activities/${id}`)
    dispatch({
      type: DELETE_ACTIVITY,
      payload: id
    })
  } catch (err) {
    console.log(err.message)
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
