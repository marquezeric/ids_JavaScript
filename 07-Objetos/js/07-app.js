/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
*/

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//  Cuando nuestra propiedad se encuentra dentro de un objeto y esta a su vez esta definida con una variable CONST si se pueden reescribir

producto.disponible = false;

delete producto.precio;

console.log(producto);
