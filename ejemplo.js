const alumnos = [
  {
    nombre: 'pepe',
    apellido: 'ramirez'
  },
  {
    nombre: 'arturo',
    apellido: 'martin'
  }
]

// Queremos obtener todos los alumnos que se llamen arturo:
// - para ello tenemos la funcion filter, que se usa con arrays de objetos

const losArturo = alumnos.filter(
  // function
  (alumno) => { return alumno.nombre === 'arturo' }
)

// Otra posibilidad sería pasarle la propiedad de busqueda, para complicarlo:
// - Creamos una funcion que recibe dos parametros: alumnos e item
// - Con lo recibido se lo pasamos a la función filter para que devuelva la busqueda

const filtradoPorItem = (alumnos, item) => alumnos.filter(
  (alumno) => { return alumno[item] === 'pepe' }
)

// === para que sean iguales en valor y en tipo

console.log(losArturo)
console.log('Otra cosa ...')
console.log(filtradoPorItem(alumnos, 'nombre'))
