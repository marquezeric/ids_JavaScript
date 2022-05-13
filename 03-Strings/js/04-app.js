//  IDS. Eric Márquez Salas
// Concatenar Strings

const producto ='                       Monitor de 20 pulgadas  ';

console.log(producto);
console.log(producto.length);

//  Eliminar los espacios en blanco
console.log(producto.trimStart()); //  Util cuando se desea pasar los datos reales y no con espacios en blanco
console.log(producto.trimEnd());  // Elimina los espacios en blanco que se llegaran a encontrar

console.log(producto.trimStart().trimEnd());  //  Método nuevo eliminará espacios al inicio y al final

console.log(producto.trim());  //  Elimina espacios en blanco en ambos sentidos