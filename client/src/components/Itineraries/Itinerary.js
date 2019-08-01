import React from 'react'

const Itinerary = ({ location }) => {
  return (
    <div>
      <p>{location.state.title}</p>
    </div>
  )
}

export default Itinerary
