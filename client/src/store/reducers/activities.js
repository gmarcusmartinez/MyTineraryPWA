import {
  GET_ACTIVITY,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY
} from '../actions/types'

const initialState = {
  activities: [],
  activity: null,
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
        loading: false
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [payload, ...state.activities],
        loading: false
      }
    case GET_ACTIVITY:
      return {
        ...state,
        activity: payload,
        loading: false
      }
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity._id !== payload
        ),
        loading: false
      }
    default:
      return state
  }
}
