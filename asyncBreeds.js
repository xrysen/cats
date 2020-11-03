const fs = require("fs");

const breedDetailsFromFile = (breed, callback) => {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's callback: it has data");
    if (!error) 
      callback(data);
    else 
      callback(undefined);
  });
  // ISSUE: Attempting to return data our will also not work
  // Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};


module.exports = breedDetailsFromFile;
