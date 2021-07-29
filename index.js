const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;


fetchBreedDescription(URL, (error, desc) => {
  if (error) {
    console.log('Error: This is not the Cat Post you are looking for 🙀: ');
  } else {
    const breedData = JSON.parse(desc);
    if (breedData[0] === undefined) {
      console.log(`Your cat breed query is outside our categories 🙀`);
    } else {
      //in case of multiple cat breeds fulfilling the given string to search
      for (const eachCat of breedData) {
        console.log(`\n😻😻😻\n${eachCat.description}`);
      }
    }
  }
});