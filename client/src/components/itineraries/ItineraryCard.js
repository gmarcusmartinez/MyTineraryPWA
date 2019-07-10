import React from 'react'

const ItineraryCard = ({ title, img }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card" style={{ padding: '0' }}>
        <div className="card-image ">
          <img src={img} alt="" className="city-img" />
          <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default ItineraryCard
