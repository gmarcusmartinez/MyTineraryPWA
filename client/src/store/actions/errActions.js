import uuid from 'uuid'
import { SET_ERROR, REMOVE_ERROR } from './types'

export const setError = msg => dispatch => {
  const id = uuid.v4()
  dispatch({
    type: SET_ERROR,
    payload: { msg, id }
  })
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ERROR,
        payload: id
      }),
    3000
  )
}
