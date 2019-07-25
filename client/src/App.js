import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Landing from './components/Landing/Landing'
import GuestNav from './components/Nav/GuestNav'
function App() {
  return (
    <div className="App">
      <GuestNav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}

export default App
