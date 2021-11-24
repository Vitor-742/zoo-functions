const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  obj.child = entrants.filter((item) => item.age < 18).length;
  obj.adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  obj.senior = entrants.filter((item) => item.age >= 50).length;
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  console.log(entrants);
  const a = countEntrants(entrants);
  return a.child * prices.child + a.adult * prices.adult + a.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
