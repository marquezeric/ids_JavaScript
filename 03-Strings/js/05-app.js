/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Remplazar / Cortar   Strings
*/

const producto ='Monitor de 20 Pulgadas';

console.log(producto);

//  .replace() para reemplazar
console.log(producto.replace('Pulgadas', '"'));  //  Poner atención a que la palabra a remplazar debe ser igual

console.log(producto.replace('Monitor', 'Pantalla plana').replace('Pulgadas','"'));

//  .slice(Inicio,Fin)  para cortar, si solo se pone un parámetro, lo tomará como que es el segundo
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); // Si el primer parámetro es mayor que el segundo esta función no realizará nada

// Opción alterna a slice, substring detecta que el primer parámetro es mas grande que el segundo, y lo corrige
console.log(producto.substring(0,10));
console.log(producto.substring(1,2));  //  El parámetro final no lo toma en cuenta, ese es el Límite

const usuario = "Eric";

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));