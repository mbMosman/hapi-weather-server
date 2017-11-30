const Axios = require('axios');

const weatherApiKey = 'c41fab6b30e06a4738253757022276fd';
const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip) {
  const method = '/weather';
  const params = `?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;

  const url = `${weatherApiRoot}${method}${params}`;

  let obj = {};
  try {
    const response = await Axios.get(url);
    obj = response.data;
  } catch (error) {
    obj.error = error;
  }
  return obj;
}

module.exports = {
  getCurrent: getCurrentWeather
};
