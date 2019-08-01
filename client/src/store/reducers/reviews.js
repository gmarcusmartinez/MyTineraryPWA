import {
  GET_REVIEW,
  GET_REVIEWS,
  CREATE_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW
} from '../actions/types'

const initialState = {
  reviews: [],
  review: null,
  reviewsLoading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        reviewsLoading: false
      }
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [payload, ...state.reviews],
        reviewsLoading: false
      }
    case GET_REVIEW:
      return {
        ...state,
        review: payload,
        reviewsLoading: false
      }
    case UPDATE_REVIEW:
      return {
        ...state,
        reviews: [
          payload,
          ...state.reviews.filter(review => review._id !== payload._id)
        ],

        reviewsLoading: false
      }
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(review => review._id !== payload),
        reviewsLoading: false
      }
    default:
      return state
  }
}
