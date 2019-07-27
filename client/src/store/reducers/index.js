import { combineReducers } from 'redux'
import err from './err'
import auth from './auth'
import cities from './cities'

export default combineReducers({ err, auth, cities })
