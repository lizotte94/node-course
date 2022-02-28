const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7ecb281e0b5481deb89f5a5a2e8ca89c&query=${latitude},${longitude}`
  request({ url: url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to forecast services!', undefined);
    } else if (body.error) {
      callback('Can\'t find forecast for these coordinates. Try another search.', undefined);
    } else {
      callback(undefined, `Outside, it is currently ${body.current.weather_descriptions[0].toLowerCase()}. It is ${body.current.temperature} celsius degree feels like ${body.current.feelslike}, with a ${body.current.wind_speed}km/h wind speed.`)      
    }
  });
};

module.exports = forecast;