import React, { useState } from 'react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'
import { withStyles } from '@material-ui/core/styles'

const initialViewport = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
}

const Map = ({ classes }) => {
  const [viewport, setViewport] = useState(initialViewport)

  return (
    <div className={classes.main}>
      <ReactMapGL
        width="100%"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken=""
        onViewportChange={viewport => setViewport(viewport)}
        {...viewport}>
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={viewport => setViewport(viewport)}
          />
        </div>
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
  }
}

export default withStyles(styles)(Map)
