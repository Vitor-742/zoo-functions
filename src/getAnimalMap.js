const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  infelizmente tem que ficar com 2 funcSex pq o lint não aceita nem 3 if juntos na função
function funcSex2(options, anim, aux) {
  if (options.sex === 'female' && anim.sex === 'female') aux.push(anim.name);
  if (options.sex === 'male' && anim.sex === 'male') aux.push(anim.name);
}

function funcSex(options, anim, aux) {
  if (options.sex === undefined) aux.push(anim.name);
  /* if (options.sex === 'female' && anim.sex === 'female') aux.push(anim.name)
  if (options.sex === 'male' && anim.sex === 'male') aux.push(anim.name) */
  funcSex2(options, anim, aux);
}

function getAnimalMap(
  options = { includeNames: false, sorted: false, sex: undefined },
) {
  const a = {};
  species.forEach((item) => {
    if (!Object.keys(a).includes(item.location)) a[item.location] = [];
    if (options.includeNames === true) {
      const b = {};
      const aux = [];
      item.residents.forEach((anim) => {
        funcSex(options, anim, aux);
      });
      if (options.sorted === true) aux.sort();
      b[item.name] = aux;
      a[item.location].push(b);
    } else a[item.location].push(item.name);
  });
  return a;
}

module.exports = getAnimalMap;
