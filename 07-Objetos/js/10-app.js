//  IDS-Eric Márquez
//  Programación Orientada a Objetos con JavaScript
//  Unir dos objetos assign


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

const union1 = Object.assign(producto, medidas);
console.log("Primera forma", union1);


//  Segunda forma de unir dos objetos

const union2 = {...producto, ...medidas};
console.log("Segunda forma", union2);