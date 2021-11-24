const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((pessoa) => pessoa.managers.some((man) => man === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const a = employees.filter((pessoa) => pessoa.managers.some((item) => item === managerId));
  return a.map((item) => `${item.firstName} ${item.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
