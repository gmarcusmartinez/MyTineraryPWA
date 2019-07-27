import { combineReducers } from 'redux'
import err from './err'
import auth from './auth'
import cities from './cities'
import itineraries from './itineraries'

export default combineReducers({ err, auth, cities, itineraries })
