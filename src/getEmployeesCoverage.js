const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  criar mais essa função que ficaria bem junto a outra mas o lint não deixa
function procuraId(p1) {
  if (Object.keys(p1).includes('id')) {
    if (!employees.some((pessoa) => pessoa.id === p1.id)) throw new Error('Informações inválidas');
    const p2 = employees.find((pessoa) => pessoa.id === p1.id);
    return p2;
  }
}

//  procurar a parametro principal e retorna seu id somente
function procuraName(p1) {
  if (Object.keys(p1).includes('name')) {
    const p2 = employees.find(
      (item) => item.firstName === p1.name || item.lastName === p1.name,
    );
    if (p2 === undefined) throw new Error('Informações inválidas');
    return p2;
  }
  return procuraId(p1);
}

//  achar as especies q é responsavel. receber array de id e retornar array de nomes dos animais
function achaIdAnimal(p1) {
  const a = p1.reduce(
    (acc, id) => acc.concat(species.filter((item) => item.id === id)),
    [],
  );
  return a.map((item) => item.name);
}

//  achar suas localizações
function localiza(p1) {
  const a = p1.reduce(
    (acc, bicho) => acc.concat(species.filter((item) => item.id === bicho)),
    [],
  );
  return a.map((item) => item.location);
}

function retornaObjeto(pessoa) {
  const obj = {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: achaIdAnimal(pessoa.responsibleFor),
    locations: localiza(pessoa.responsibleFor),
  };
  return obj;
}

function getEmployeesCoverage(options) {
  const a = [];
  if (options === undefined) {
    employees.forEach((pessoa) => {
      a.push(retornaObjeto(pessoa));
    });
    return a;
  }
  const pessoa = procuraName(options);
  const b = retornaObjeto(pessoa);
  return b;
}

module.exports = getEmployeesCoverage;
