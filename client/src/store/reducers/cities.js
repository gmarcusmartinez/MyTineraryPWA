import { GET_CITIES, CREATE_CITY, DELETE_CITY } from '../actions/types'

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
    case CREATE_CITY:
      return {
        ...state,
        cities: [payload, ...state.cities],
        loading: false
      }
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => city._id !== payload),
        loading: false
      }
    default:
      return state
  }
}
