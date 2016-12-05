const request = require('request');

const WEATHER_API_KEY = 'bf50a71c879580f29dcc9ad7a89c44dd';

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode === 400) {
            callback('Unable to find that address');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
}

module.exports = {
    getWeather
}