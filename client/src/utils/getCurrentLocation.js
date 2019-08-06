const axios = require('axios')

const getCurrentLocation = () => {
  if (!navigator.geolocation) console.log('Gelocation not supported by Browser')
  navigator.geolocation.getCurrentPosition(position => {
    const coords = position.coords
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
      coords[0]
    },${
      coords[1]
    }$json?access_token=pk.eyJ1IjoiZ21hcmN1c21hcnRpbmV6IiwiYSI6ImNqdjI3OTM1aTBwcTA0M3A5dDVpYjRzdWoifQ.CTIRN-C7Fd_lhCLrGgjM1w`
    const res = axios.get(url)
    console.log(res.data.features[0].place_name)
  })
}

export default getCurrentLocation
