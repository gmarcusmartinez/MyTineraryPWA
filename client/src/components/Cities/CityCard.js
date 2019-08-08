import React from 'react'

const CityCard = ({ name, img, _id }) => {
  const capitalize = string => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  return (
    <div
      className="col s12 l6"
      style={{
        marginBottom: '-15px'
      }}>
      <div className="card" key={_id}>
        <div className="card-image ">
          <img
            src={img}
            alt=""
            style={{
              filter: 'brightness(60%)',
              height: '170px',
              objectFit: 'cover'
            }}
          />
          <span className="card-title">{capitalize(name)}</span>
        </div>
      </div>
    </div>
  )
}

export default CityCard
