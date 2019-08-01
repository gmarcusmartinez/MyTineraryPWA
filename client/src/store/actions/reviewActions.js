import axios from 'axios'
import {
  GET_REVIEW,
  GET_REVIEWS,
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW
} from './types'

import { setError } from './errActions'

export const createReview = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`/reviews/`, formData, config)
    dispatch({
      type: CREATE_REVIEW,
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

export const getReviews = id => async dispatch => {
  try {
    const res = await axios.get(`/reviews/${id}`)
    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const getReview = id => async dispatch => {
  try {
    const res = await axios.get(`/reviews/edit/${id}`)
    dispatch({
      type: GET_REVIEW,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const updateReview = (formData, _id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.patch(`/reviews/${_id}`, formData, config)
    dispatch({
      type: UPDATE_REVIEW,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors
    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
export const deleteReview = id => async dispatch => {
  try {
    await axios.delete(`/reviews/${id}`)
    dispatch({
      type: DELETE_REVIEW,
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
