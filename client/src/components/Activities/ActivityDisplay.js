import React from 'react'

const ActivityDisplay = ({ activity }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image" style={{ height: '250px' }}>
          <img
            src={activity.img}
            alt="brokenLink"
            style={{
              filter: 'brightness(70%)',
              height: '250px',
              objectFit: 'cover'
            }}
          />
          <div>
            <span className={'card-title'}>
              {activity.title}
              <div style={{ fontSize: '20px' }}>
                <i
                  className="fas fa-map-pin white-text "
                  style={{ marginRight: '6px', fontSize: '20px' }}
                />
                {activity.location}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityDisplay
