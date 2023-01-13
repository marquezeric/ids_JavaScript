/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Tratamiento de espacios en blanco en Strings
*/

const producto ='                       Monitor de 20 pulgadas  ';

console.log(producto);
console.log(producto.length);

//  Eliminar los espacios en blanco
console.log(producto.trimStart()); //  Util cuando se desea pasar los datos reales y no con espacios en blanco al inicio
console.log(producto.trimEnd());  // Elimina los espacios en blanco que se llegaran a encontrar al final

console.log(producto.trimStart().trimEnd());  //  Uso de ambos métodos para eliminar espacios al inicio y al final

console.log(producto.trim());  //  Elimina espacios en blanco en ambos sentidos, esta es una función vieja