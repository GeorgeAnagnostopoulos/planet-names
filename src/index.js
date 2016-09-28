//Planet and Satellite Names and Discoverers taken from http://planetarynames.wr.usgs.gov/Page/Planets (09/28/2016)
var planetNames = require('./planetNames.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: planetNames,
  random: uniqueRandomArray(planetNames)
};
