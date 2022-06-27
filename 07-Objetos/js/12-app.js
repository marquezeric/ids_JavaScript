//  IDS-Eric Márquez
//  Programación Orientada a Objetos con JavaScript
//  this en una forma de referirse al objeto mismo, es decir lee los valores de las propiedades
//  que existen en el mismo objeto

//  Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto ${this.nombre} tiene un precio de ${this.precio} disponible en tienda ${this.disponible}`)
    }
}

//  Object Constructor
//  Es mas dinámica
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//  Creamos una variable que llama a la función producto, pasando dos parámetros
const producto2 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Pantalla Plana de 42 Puldadas', 2300);
console.log(producto3);

//  Solo llamamos a la función mostrarInfo
producto.mostrarInfo()