//  IDS-Eric Márquez Salas
//  Trabajo con arreglos

// Recordemos la estructura de Destructuring
//const producto = {
//    nombre: "Monitor HP 32 Pulgadas",
//    precio: 400,
//    disponible: true
//}

//  Destructuring Estructura normal
//const {nombre} = producto;
//console.log(nombre);

// ----- Para los arreglos también se puede aplicar Destructuring ---------
//  Definimos el arreglo
const meses = ['Enero','Febrero','Marzo','Abril'];

const [segundo] = meses;
console.log(segundo);  //  Mostrará Enero por que el nombre solo indica que captara el primer valor del arreglo
const [ , , primer] = meses;
console.log(primer);  //  Mostrará Marzo 

const colores = ['Rojo','Azul','Amarillo','Verde','Naranja','Morado'];
const [primario, , , ...terciario] = colores;
console.log(terciario);
console.table(colores);
console.log(colores.length);