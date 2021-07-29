const request = require('request');
//const { URL } = require('./index');



const fetchBreedDescription = function(URL, callback) {
  
  request(URL, (error, response, body) => {
    if (error) {
      console.log(error, null);
      callback(error);
      return;
    } else if (response && body) {
      callback(null, body);
    }
  });
};
module.exports = {
  fetchBreedDescription
};