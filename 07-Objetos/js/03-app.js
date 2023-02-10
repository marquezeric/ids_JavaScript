/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Agregar o Eliminar propiedades a un objeto
*/

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//  Agregar nuevas propiedades después o fuera del objeto, no es necesario utilizar los dos puntos

producto.cantidad = 25;
producto.imagen = "imagen.jpg";

//  Elimninar propiedades fuera del objeto

delete producto.disponible;

producto.existencia = true;

console.log(producto);