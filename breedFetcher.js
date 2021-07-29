const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  };
  
  if(response && body) {
    const breedData = JSON.parse(body);
    console.log(breedData);
  }
});