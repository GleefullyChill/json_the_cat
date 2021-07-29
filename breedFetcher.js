//breedFetcher.js

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else if (response && body) {
      const breedData = JSON.parse(body);
      if (breedData[0] === undefined) {
        callback(breedData[0], null)
      } else {
      callback(null, breedData[0].description);
      }
    }
  });
};
module.exports = {
  fetchBreedDescription
};