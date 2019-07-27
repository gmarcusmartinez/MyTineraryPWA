import { SIGNUP, AUTH_ERROR, SET_USER, LOGIN, LOGOUT } from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}
export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case SIGNUP:
    case LOGIN:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }
    default:
      return state
  }
}
