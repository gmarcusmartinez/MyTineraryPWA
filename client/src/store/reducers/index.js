import { combineReducers } from 'redux'
import err from './err'
import auth from './auth'
import cities from './cities'
import reviews from './reviews'
import activities from './activities'
import itineraries from './itineraries'

export default combineReducers({
  err,
  auth,
  cities,
  reviews,
  itineraries,
  activities
})
