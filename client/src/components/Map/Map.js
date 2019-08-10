import { connect } from 'react-redux'
import PinIcon from './PinIcon'
import React, { useState, useEffect } from 'react'
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl'
import { withStyles } from '@material-ui/core/styles'

const initialViewport = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
}

const Map = ({ classes, activities: { activities, loading } }) => {
  const [viewport, setViewport] = useState(initialViewport)
  const [popup, setPopup] = useState(null)

  useEffect(() => {
    if (activities.length !== 0) {
      setViewport({
        latitude: activities[0].coords.lng,
        longitude: activities[0].coords.lat,
        zoom: 13
      })
    }
  }, [activities])
  const selectActivity = activity => {
    setPopup(activity)
  }
  return (
    <div className={classes.main}>
      <ReactMapGL
        width="100vw"
        height="675px"
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken="pk.eyJ1IjoiZ21hcmN1c21hcnRpbmV6IiwiYSI6ImNqdjI3OTM1aTBwcTA0M3A5dDVpYjRzdWoifQ.CTIRN-C7Fd_lhCLrGgjM1w"
        onViewportChange={viewport => setViewport(viewport)}
        {...viewport}>
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={viewport => setViewport(viewport)}
          />
        </div>
        {activities &&
          activities.map(activity => (
            <div key={activity._id} onClick={() => selectActivity(activity)}>
              <Marker
                latitude={activity.coords.lng}
                longitude={activity.coords.lat}
                offsetLeft={-19}
                offsetTop={-37}>
                <PinIcon />
              </Marker>
            </div>
          ))}
        {popup && (
          <Popup
            anchor="top"
            latitude={popup.coords.lng}
            longitude={popup.coords.lat}
            closeOnClick={false}
            onClose={() => setPopup(null)}>
            <p className={`${classes.popupTitle} center`}>{popup.title}</p>
            <img
              src={popup.img}
              className={classes.popupImg}
              alt={popup.title}
            />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  )
}

const styles = {
  main: {
    display: 'flex'
  },
  navigationControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '1em'
  },
  popupImg: {
    padding: '0.4em',
    height: 200,
    width: 200,
    objectFit: 'cover'
  },
  popupTitle: {
    margin: '0px',
    fontFamily: 'Caveat',
    fontSize: '1.25rem'
  }
}
const mapStateTotProps = state => ({
  activities: state.activities
})
export default connect(
  mapStateTotProps,
  {}
)(withStyles(styles)(Map))
