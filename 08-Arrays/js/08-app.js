/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
*/

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

const [mescapturado] = meses;  //  Uso del Destructuring, asignación de una variable para elementos del arreglo
console.log(mescapturado);  //  Mostrará Enero por que el nombre solo indica que captara el primer valor del arreglo
const [ , , primer] = meses;  // El uso de las comas indica que no se desean los elementos previos al elemento deseado
console.log(primer);  //  Mostrará Marzo 

const colores = ['Rojo','Azul','Amarillo','Verde','Naranja','Morado'];
const [...todos_color] = colores;  //  Sintaxis para extraer elementos intermedios dentro de el arreglo
console.log(todos_color);
console.table(colores);
console.log(colores.length);