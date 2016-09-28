var expect = require('chai').expect;
var planetNames = require('./index');

describe('planet-names', function() {

  describe('all', function() {
    it('should return an array of strings', function() {
      expect(planetNames.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain exactly 180 planets and satelllites', function() {
      expect(planetNames.all.length).to.equal(180);
    });

    it('should contain Earth', function() {
      expect(planetNames.all).to.include('Earth');
    });
  });

  describe('random', function() {
    it('should return a random item from planetNames.all', function() {
      var randomItem = planetNames.random();
      expect(planetNames.all).to.include(randomItem);
    });
    it('should return an array of items if passed a number', function() {
      var randomItems = planetNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(planetNames.all).to.include(item);
      });
    });
  });
});
