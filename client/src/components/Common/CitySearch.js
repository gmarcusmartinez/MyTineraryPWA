import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const CitySearch = () => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const capitalize = query => {
    if (typeof query !== 'string') return ''
    return query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()
  }

  return (
    <div className="col s12">
      <div className="row">
        <div className="input-field col s6 offset-s3">
          <input
            type="text"
            placeholder="Search for a City"
            value={query}
            onChange={handleChange}
          />
          <Link
            className="btn white red-text text-lighten-2 btn-flat"
            style={{
              width: '100%',
              marginTop: '10px',
              border: '1px solid #e57373'
            }}
            to={`/cities/${capitalize(query)}`}>
            Go
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CitySearch
