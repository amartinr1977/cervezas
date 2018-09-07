const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')

const _ = require('lodash')

const prueba = function () {
  return 'Es es mi función de prueba'
}
module.exports = {
  // Todas devuelve un json con todas
  todas: _.sortBy(cervezas, ['nombre']),
  // uniqueRandowArray devuelve a una función:
  // Para probarlo desde una consola de node:
  // $ node
  // > const una = require('./src/index')
  // > console.log(una.alazar())
  alazar: uniqueRandomArray(cervezas)
}
