//index.js

const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);


fetchBreedDescription(breedName, (error, desc) => {
  if (error === undefine ?
    console.log(`Error: Your cat breed is missing from our Categories! š`)
    : console.log(`Error: This is not the Cat Post you are looking for š: ${error}`));
  
      console.log(`\nš»š»š»\n${desc}`);
});