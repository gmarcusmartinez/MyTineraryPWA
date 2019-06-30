import React from 'react'
import { connect } from 'react-redux'
import { deleteCity, getCity } from '../../store/actions/cityActions'

const CityCreatorCard = ({ name, _id, deleteCity, getCity }) => {
  return (
    <div className="card" style={{ padding: '10px' }}>
      <span className="card-title">
        {name}
        <i
          onClick={e => getCity(_id)}
          data-target="city-edit"
          className="fas fa-pencil-alt red-text text-lighten-2 city-creator-btn right modal-trigger"
        />
        <i
          onClick={e => deleteCity(_id)}
          className="fas fa-trash-alt red-text text-lighten-2 city-creator-btn right"
        />
      </span>
    </div>
  )
}

export default connect(
  null,
  { deleteCity, getCity }
)(CityCreatorCard)
