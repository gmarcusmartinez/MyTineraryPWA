import React, { Component } from 'react'
import GuestNav from './GuestNav'
import M from 'materialize-css/dist/js/materialize.min.js'

export default class Nav extends Component {
  componentDidMount() {
    let elem = document.querySelector('.sidenav')
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    })
  }
  render() {
    return <GuestNav />
  }
}
