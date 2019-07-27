import {
  GET_ITINERARIES,
  GET_AUTH_USER_ITINERARIES,
  CREATE_ITINERARY
} from '../actions/types'
const initialState = {
  itineraries: [],
  itinerary: null,
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ITINERARIES:
    case GET_AUTH_USER_ITINERARIES:
      return {
        ...state,
        itineraries: payload,
        loading: false
      }
    case CREATE_ITINERARY:
      return {
        ...state,
        itineraries: [payload, ...state.itineraries],
        loading: false
      }
    default:
      return state
  }
}
