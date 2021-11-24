const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, id) => acc.concat(species.find((item) => id === item.id)), []);
}

module.exports = getSpeciesByIds;
