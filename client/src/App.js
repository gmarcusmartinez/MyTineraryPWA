import './App.css'
import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import Nav from './components/nav/Nav'
import City from './components/cities/City'
import Cities from './components/cities/Cities'
import Signup from './components/auth/Signup'
import Landing from './components/landing/Landing'
import CityCreator from './components/cityCreator/CityCreator'
import CreateItinerary from './components/itineraries/CreateItinerary'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/cities" component={Cities} />
            <Route exact path="/cities/:cityName" component={City} />
            <Route exact path="/city-creator" component={CityCreator} />
            <Route exact path="/create-itinerary" component={CreateItinerary} />
            <Route exact path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
