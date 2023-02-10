/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    THIS en una forma de referirse al objeto mismo, es decir lee los valores
    de las propiedades que existen en el mismo objeto
    utilizando la sintaxis de String Templates
*/

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio} disponible en tienda ${this.disponible}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 150,
    disponible: false,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio} disponible en tienda ${this.disponible}`)
    }
}

const auto1 = {
    modelo: "Suzuki sx4 2.0",
    year: "2009",
    tipo: "Hatchback",
    combustible: "Gasolina",
    // De la mismas propiedades deseamos mostrar información
    //  Generamos una función para posteriormente llamarla
    infoComprador: function(){
        console.log(`Uno de los autos mas seguros del ${this.year} es el ${this.modelo} del tipo ${this.tipo}, el mejor de su categoría`);
    }
}

const depto1 = {
    modelo: "Bosques",
    habitaciones: 2,
    sanitario: 1,
    nivel: 3,
    ubica: "Mz. 126, Lt. 19, Depto 6",
    estacionamiento: "Si",
    infoVentas: function(){
        console.log(`Dentro del fraccionamiento Los Héroes Tecámac se encuentra la sección ${this.modelo} `);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();
auto1.infoComprador();
depto1.infoVentas();
