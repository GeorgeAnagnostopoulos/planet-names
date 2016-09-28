var planetNames = require('./planetNames.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(planetNames);

module.exports = {
  all: planetNames,
  random: random
};

function random(number) {

  var randomItems = [];

  if (number === undefined) {
    return getRandomItem();
  }
  else {
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
  }
  return randomItems;
}
