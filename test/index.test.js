/* global describe it */
// Lo anterior es para que el Linter ES no se queje y nos marque todo como errores:
// global seguido de la lista de funciones que de por hecho que ya existen
const expect = require('chai').expect
const cervezas = require('../src/index')

describe('Cervezas', () => {
  describe('La lista de todas', () => {
    it('Debería ser un array de objetos', () => {
      expect(cervezas.todas).to.satisfy(isArrayOfObjects)
    })
    it('Debería incluir la cerveza Ambar', () => {
      expect(cervezas.todas).to.satisfy(contieneAmbar)
    })
  })
  describe('Elegir una cerveza al azar', () => {
    it('Debería mostrar un elemento de la lista de cervezas', () => {
      const cerveza = cervezas.alazar()
      expect(cervezas.todas).to.include(cerveza)
    })
  })
})

const isArrayOfObjects = array => {
  return array.every(item => {
    return typeof item === 'object'
  })
}

const contieneAmbar = array => array.some(
  (cerveza) => cerveza.nombre === 'ÁMBAR ESPECIAL'
)

/*

Lo anterior es igual a esto:

const contieneAmbar = (array) => {
  return
    array.some(
      (cerveza) => cerveza.nombre === 'AMBAR ESPECIAL'
    )
}

O igual a esto:

function contieneAmbar (array) {
  return array.some(nombreIgual)
}

function nombreIgual (nombre) {
  return cerveza.nombre === 'AMBAR ESPECIAL'
}

Otro ejemplo de uso podría ser:

*/
