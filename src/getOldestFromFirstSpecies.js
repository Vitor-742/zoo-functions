const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const a = employees.find((pessoa) => id === pessoa.id);
  const bicho = a.responsibleFor[0];
  let maior = 0;
  let c;
  species.find((anim) => anim.id === bicho).residents.forEach((item) => {
    if (item.age > maior) {
      maior = item.age;
      c = item;
    }
  });
  return [c.name, c.sex, c.age];
}

module.exports = getOldestFromFirstSpecies;
