import { SET_ERROR, REMOVE_ERROR } from './types'
import uuid from 'uuid'

export const setError = err => dispatch => {
  const id = uuid.v4()
  dispatch({
    type: SET_ERROR,
    payload: { err, id }
  })
}
