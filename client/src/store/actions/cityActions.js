import axios from 'axios'
import { GET_CITIES, CREATE_CITY } from './types'

export const getCities = () => async dispatch => {
  try {
    const res = await axios.get('/cities')
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
}
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
    console.log(err.message)
  }
}
