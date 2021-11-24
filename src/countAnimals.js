const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const a = {};
    species.forEach((item) => {
      a[item.name] = item.residents.length;
    });
    return a;
  }
  let a = species.filter((item) => item.name === animal.specie)[0].residents;
  if (animal.sex === 'female') {
    a = a.filter((item) => item.sex === 'female');
  } else if (animal.sex === 'male') {
    a = a.filter((item) => item.sex === 'male');
  }
  return a.length;
}

module.exports = countAnimals;
