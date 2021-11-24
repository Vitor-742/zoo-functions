const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let nome = employees.find(
    (item) => item.firstName === employeeName || item.lastName === employeeName,
  );
  if (nome === undefined) nome = {};
  return nome;
}

module.exports = getEmployeeByName;
