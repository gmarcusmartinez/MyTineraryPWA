import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  infoOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  infoP: {
    fontFamily: 'Caveat',
    color: 'white',
    fontSize: '20px'
  }
}

const ActivityDisplay = ({ activity, classes }) => {
  const [displayInfo, setDisplayInfo] = useState(false)
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image" cl={{ height: '250px' }}>
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
            {activity.description !== '' ? (
              <i
                className="fas fa-ellipsis-v white-text"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  fontSize: '20px'
                }}
                onClick={() => setDisplayInfo(true)}
              />
            ) : null}

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
        {displayInfo && (
          <div className={classes.infoOverlay}>
            <i
              className="fas fa-times white-text"
              style={{
                fontSize: '20px',
                position: 'absolute',
                top: '-15px',
                right: '-3px'
              }}
              onClick={() => setDisplayInfo(false)}
            />
            <div
              className="container"
              style={{ width: '90%', marginTop: '18px' }}>
              <p className={classes.infoP}>{activity.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default withStyles(styles)(ActivityDisplay)
