/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Uso de Destructuring
*/

//  DECLARAMOS EL OBJETO
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//  Forma normal de extraer la propiedad de una clase
//console.log(producto.nombre);

//  Extrer una propiedad de la clase y asignarla a su propia variable
//const nombre = producto.nombre;  //  Extraemos del objeto la propiedad "nombre"  > producto.nombre y tambien la asignamos a la variable nombre
//console.log(nombre);

//  Destructuring
//const { nombre } = producto;
//const { precio } = producto;
//const { disponible } = producto;

//console.log(nombre);
//console.log(precio);
//console.log(disponible);

//  Simplificando la instrucción de arriba

const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

console.log(producto);