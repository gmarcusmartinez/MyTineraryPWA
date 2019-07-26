import { combineReducers } from 'redux'
import err from './err'
import auth from './auth'
// import itineraries from './itineraries'

export default combineReducers({ err, auth })
