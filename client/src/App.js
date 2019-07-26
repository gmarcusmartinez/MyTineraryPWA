import React, { useEffect } from 'react'
import './App.css'
import store from './store/store'
import { Provider } from 'react-redux'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import setAuthToken from './utils/setAuthToken'
import { Route, Switch } from 'react-router-dom'
import GuestNav from './components/Nav/GuestNav'
import Landing from './components/Landing/Landing'
import { setUser } from './store/actions/authActions'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
const App = () => {
  useEffect(() => {
    store.dispatch(setUser())
  }, [])
  return (
    <Provider store={store}>
      <div className="App">
        <GuestNav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={Signup} />
        </Switch>
      </div>
    </Provider>
  )
}

export default App
