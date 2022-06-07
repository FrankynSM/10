// Objetos

// Object Literal
const persona = {
 nombre: 'Juan',
 profesion: 'Desarrollar web',
 edad: 500,
}
// console.log(persona)
// const mostrarCliente = mostrarInformacionTarea(
//  persona.nombre,
//  persona.profesion
// )
// console.log(mostrarCliente)

//  Object constructor

function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}
// Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

// Crear una nueva tarea:
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente')
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())
