import React from 'react'

const CityCard = ({ name, img }) => {
  return (
    <div className="card">
      <div className="card-image ">
        <img src={img} alt="" className="city-img" />
        <span className="card-title">{name}</span>
      </div>
    </div>
  )
}

export default CityCard
