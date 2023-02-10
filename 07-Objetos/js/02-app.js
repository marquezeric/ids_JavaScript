/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Acceder a las propiedades del objeto
*/
//  Creación del Objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

//  Sintaxis de punto, al tener creado el objeto se puede acceder a las 
//  propiedades que tiene la clase, como abajo se muestra

console.log(producto.nombre); //  Sintaxis de punto
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['precio']);  //  Esta sintaxis no es tan común