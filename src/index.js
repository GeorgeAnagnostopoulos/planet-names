var planetNames = require('./planetNames.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: planetNames,
  random: uniqueRandomArray(planetNames)
};
