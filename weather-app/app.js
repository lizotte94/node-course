const request = require('request')
// const url = 'http://api.weatherstack.com/current?access_key=7ecb281e0b5481deb89f5a5a2e8ca89c&query=New%20York'

// const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json'

// request({ url: url, json: true }, (error, response) => {
//   const currentTemperature = response.body.current.temperature
//   const currentFeel = response.body.current.feelslike
//   console.log(`It is currently ${currentTemperature} degrees out. It feels like ${currentFeel} degrees out.`)
// })

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGl6b3R0ZTk0IiwiYSI6ImNreXl1bHlnZzBlOTUydm54Z2t6NWYzNmEifQ.VKyxkaXn01OYXN-bx108ZA&limit=1'

request({url: url, json: true}, (error, response) => {
  console.log(`Latitude: ${response.body.features[0].center[0]}\nLongitude: ${response.body.features[0].center[1]}}`)
})


