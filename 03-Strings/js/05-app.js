//  IDS. Eric Márquez Salas
// Cortar y Remplazar  Strings

const producto ='Monitor de 20 Pulgadas';

console.log(producto);

//  .replace() para reemplazar
console.log(producto.replace('Pulgadas', '"'));  //  Poner atención a que la palabra a remplazar debe ser igual

console.log(producto.replace('Monitor', 'Pantalla plana').replace('Pulgadas','"'));

//  .slice()  para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Opción alterna a slice, substring detecta que el primer parámetro es mas grande que el segundo, y lo corrige
console.log(producto.substring(0,10));
console.log(producto.substring(1,2));

const usuario = "Eric";

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));