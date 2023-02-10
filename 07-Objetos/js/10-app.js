/*Ing. Desarrollo de Software Eric Márquez Salas
Curso de JavaScript Moderno
Trabajo con Programación Orientada a Objetos POO
Unir dos objetos usando ASSIGN o uso de los puntos suspensivos

*/

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

console.log(producto);
console.log(medidas);


//  Primera forma de unir dos objetos

const union1 = Object.assign(producto, medidas);  //  Con el método assign se unen los dos objetos
console.log("Primera forma", union1);


//  Segunda forma de unir dos objetos

const union2 = {...producto, ...medidas};  //  los tres puntos le indican a JavaScript que copie el objeto que acontinuación se escribe
console.log("Segunda forma", union2);