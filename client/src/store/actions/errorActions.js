import { SET_ERROR, REMOVE_ERROR } from './types'
import uuid from 'uuid'

export const setError = text => dispatch => {
  const id = uuid.v4()
  dispatch({
    type: SET_ERROR,
    payload: { text, id }
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
