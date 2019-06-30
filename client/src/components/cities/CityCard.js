import React from 'react'

const CityCard = ({ name }) => {
  return (
    <div className="card">
      <p className="card-title red-text text-lighten-2">{name}</p>
    </div>
  )
}

export default CityCard
