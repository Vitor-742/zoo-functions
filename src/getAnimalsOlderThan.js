const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .find((item) => item.name === animal)
    .residents.every((bicho) => bicho.age >= age);
}

module.exports = getAnimalsOlderThan;
