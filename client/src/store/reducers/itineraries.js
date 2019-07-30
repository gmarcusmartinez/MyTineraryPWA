import {
  GET_ITINERARY,
  GET_ITINERARIES,
  CREATE_ITINERARY,
  DELETE_ITINERARY,
  UPDATE_ITINERARY,
  GET_AUTH_USER_ITINERARIES
} from '../actions/types'
const initialState = {
  itineraries: [],
  itinerary: {
    img: '',
    city: '',
    title: '',
    price: '',
    duration: '',
    description: ''
  },
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
    case GET_ITINERARY:
      return {
        ...state,
        itinerary: payload,
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
