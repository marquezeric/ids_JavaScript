/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    usando this y OBJECT CONSTRUCTOR

*/

//  Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//  Object Constructor
//  Es mas dinámica, ya que a partir de la siguiente función podemos llamar a varios 
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//  Creamos una variable que llama a la función producto, pasando los dos parámetros necesarios
const producto2 = new Producto('Monitor 27 Pulgadas', 800);
    console.log(producto2);

const producto3 = new Producto('Pantalla Plana de 42 Puldadas', 2300);
    console.log(producto3);

const producto4 = new Producto('Pantalla Curva Samsung 34 Pulgadas',9542);
    console.log(producto4);
//  Solo llamamos a la función mostrarInfo
//  producto.mostrarInfo()