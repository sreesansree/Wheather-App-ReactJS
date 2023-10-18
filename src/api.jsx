const axios = require('axios');

export const geoApiOptions = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}