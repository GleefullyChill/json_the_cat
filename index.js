//index.js

const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);


fetchBreedDescription(breedName, (error, desc) => {
  if (error === undefine ?
    console.log(`Error: Your cat breed is missing from our Categories! 🙀`)
    : console.log(`Error: This is not the Cat Post you are looking for 🙀: ${error}`));
  
      console.log(`\n😻😻😻\n${desc}`);
});