const request = require('request');
const args = process.argv.slice(2);

const URL = 'https://api.theatapi.com/v1/breeds/search?q=' + args;

request(URL, (error, response, body) => {
  if (error) {
    console.log('Error: This is not the Cat Post you are looking for 🙀');
    return;
  }
  
  if (response && body) {
    const breedData = JSON.parse(body);
    if (breedData[0] === undefined) {
      console.log(`Your cat breed query is outside our categories 🙀`);
    } else {
      console.log(breedData);
      for (const desc of breedData) {
        console.log(`Found your cat(s) 😻😻😻\n${desc}`);
      }
    }
  }
});