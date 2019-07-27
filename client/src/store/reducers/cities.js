import { GET_CITIES } from '../actions/types'
const initialState = {
  cities: [],
  city: null,
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
        loading: false
      }
    default:
      return state
  }
}
