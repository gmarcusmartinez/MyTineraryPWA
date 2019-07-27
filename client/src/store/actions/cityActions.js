import axios from 'axios'
import { GET_CITIES } from './types'
import { setError } from './errActions'

export const getCities = () => async dispatch => {
  try {
    const res = await axios.get('/cities/')
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setError(error.msg)))
    }
  }
}
