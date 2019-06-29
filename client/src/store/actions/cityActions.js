import axios from 'axios'
import { GET_CITIES } from './types'

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
