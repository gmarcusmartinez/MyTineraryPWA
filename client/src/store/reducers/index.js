import { combineReducers } from 'redux'
import err from './err'
import cities from './cities'
import itineraries from './itineraries'

export default combineReducers({ err, cities, itineraries })
