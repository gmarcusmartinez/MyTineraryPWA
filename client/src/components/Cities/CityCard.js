import React from 'react'

const CityCard = ({ name, img, _id }) => {
  return (
    <div className="card" key={_id}>
      <div className="card-image ">
        <img src={img} alt="" className="city-img" />
        <span className="card-title">{name}</span>
      </div>
    </div>
  )
}

export default CityCard
