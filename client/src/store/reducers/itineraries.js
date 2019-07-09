import {
  GET_ITINERARY,
  GET_ITINERARIES,
  CREATE_ITINERARY,
  DELETE_ITINERARY,
  UPDATE_ITINERARY,
  GET_ITINERARIES_BY_CITY
} from '../actions/types'

const initialState = {
  itineraries: [],
  itinerary: null,
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ITINERARY:
      return {
        ...state,
        itinerary: payload,
        loading: false
      }
    case GET_ITINERARIES:
    case GET_ITINERARIES_BY_CITY:
      return {
        ...state,
        itineraries: payload,
        loading: false
      }
    case CREATE_ITINERARY:
      return {
        ...state,
        itineraries: [payload, ...state.itineraries]
      }
    case UPDATE_ITINERARY:
      return {
        ...state,
        itineraries: [
          payload,
          ...state.itineraries.filter(
            itinerary => itinerary._id !== payload._id
          )
        ],
        loading: false
      }
    case DELETE_ITINERARY:
      return {
        ...state,
        itineraries: state.itineraries.filter(
          itinerary => itinerary._id !== payload
        ),
        loading: false
      }
    default:
      return state
  }
}
