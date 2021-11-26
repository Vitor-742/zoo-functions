const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function descobreParam(p1) {
  const listaDays = Object.keys(hours);
  const listaAnimals = species.map((item) => item.name);
  if (listaAnimals.includes(p1)) return 'animal';
  if (listaDays.includes(p1)) return 'dia';
  return 'nada';
}

function tipoAnimal(p1) {
  const b = species.find((item) => item.name === p1);
  return b.availability;
}

function tipoDia(p1) {
  const a = {};
  const b = species.filter((bicho) => bicho.availability.includes(p1));
  if (p1 === 'Monday') {
    a[p1] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return a;
  }
  a[p1] = {
    officeHour: `Open from ${hours[p1].open}am until ${hours[p1].close}pm`,
    exhibition: b.map((item) => item.name),
  };
  return a;
}

/* const daymonday = {
  'officeHour': 'CLOSED',
  'exhibition': 'The zoo will be closed!',
}; */
const horas = Object.values(hours);
function tipoNada() {
  const a = {};
  Object.keys(hours).forEach((dia, index) => {
    if (dia === 'Monday') {
      a[dia] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return a;
    }
    const b = species.filter((bicho) => bicho.availability.includes(dia));
    a[dia] = {
      officeHour: `Open from ${horas[index].open}am until ${horas[index].close}pm`,
      exhibition: b.map((item) => item.name),
    };
  });
  return a;
}

function getSchedule(scheduleTarget) {
  const tipo = descobreParam(scheduleTarget);
  if (tipo === 'nada') {
    return tipoNada();
  }
  if (tipo === 'animal') {
    return tipoAnimal(scheduleTarget);
  }
  if (tipo === 'dia') {
    return tipoDia(scheduleTarget);
  }
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
