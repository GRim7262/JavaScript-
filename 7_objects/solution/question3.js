// Define city data for Paris
const data1 = {
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
};

// Define city data for Tokyo
const data2 = {
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia",
};

// Define a function called 'cityFacts' that takes an 'info' object as a parameter
const cityFacts = (info) => {
  // Construct and return a formatted string with city facts using properties from 'info'
  return `${info.name} has a population of ${info.population} and is situated in ${info.continent}`;
};

// Example usage of the 'cityFacts' function with different city data
console.log(cityFacts(data1));
console.log(cityFacts(data2));
