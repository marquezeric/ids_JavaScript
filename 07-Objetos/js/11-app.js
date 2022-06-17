//  IDS-Eric Márquez
//  Programación Orientada a Objetos con JavaScript
//  this en una forma de referirse al objeto mismo, es decir lee los valores de las propiedades
//  que existen en el mismo objeto, siempre y cuando se llamen

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto ${this.nombre} tiene un precio de ${this.precio} disponible en tienda ${this.disponible}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 150,
    disponible: false,
    mostrarInfo: function() {
        console.log(`El Producto ${this.nombre} tiene un precio de ${this.precio} disponible en tienda ${this.disponible}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();