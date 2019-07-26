import React from 'react'
import './App.css'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { Route, Switch } from 'react-router-dom'
import GuestNav from './components/Nav/GuestNav'
import Landing from './components/Landing/Landing'

function App() {
  return (
    <div className="App">
      <GuestNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={Signup} />
      </Switch>
    </div>
  )
}

export default App
