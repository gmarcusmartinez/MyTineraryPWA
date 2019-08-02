import React, { useEffect } from 'react'
import './App.css'
import store from './store/store'
import Nav from './components/Nav/Nav'
import { Provider } from 'react-redux'
import Login from './components/Auth/Login'
import City from './components/Cities/City'
import Signup from './components/Auth/Signup'
import Footer from './components/Common/Footer'
import setAuthToken from './utils/setAuthToken'
import Cities from './components/Cities/Cities'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import { setUser } from './store/actions/authActions'
import PageContent from './components/Common/PageContent'
import Itinerary from './components/Itineraries/Itinerary'
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoute from './components/Common/PrivateRoute'
import MyTineraries from './components/Itineraries/MyTineraries'

import { ThemeProvider } from './context/ThemeContext'

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
        <ThemeProvider>
          <PageContent>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/cities" component={Cities} />
              <Route exact path="/sign-up" component={Signup} />
              <Route exact path="/cities/:cityName" component={City} />
              <Route exact path="/itinerary/:id" component={Itinerary} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/mytineraries"
                component={MyTineraries}
              />
            </Switch>
            <Footer />
          </PageContent>
        </ThemeProvider>
      </div>
    </Provider>
  )
}

export default App
