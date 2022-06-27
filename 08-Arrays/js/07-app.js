//  IDS-Eric Márquez Salas
//  Trabajo con arreglos

// --------- Ejemplo de un carrito de compras--------

const carrito = [];

//  Definir producto

const producto = {
    nombre: "Monitor HP 32 Pulgada",
    precio: 400
}

const producto2 = {
    nombre: "Laptop Asus Pro",
    precio: 700
}

const producto4 = {
    nombre: "Celular Iphone 6S",
    precio: 700
}
//  Agrega los valores al final del arreglo

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: "Celular Nova P9",
    precio: 900
}

carrito.unshift(producto3);


console.table(carrito);


//  Eliminar ultimo valor del arreglo


//carrito.pop();
//console.table(carrito);
//console.log(carrito.length);

//  Eliminar el primer valor del arreglo

//carrito.shift();
//console.table(carrito);
//console.log(carrito.length);

// Eliminar valores intermedios

carrito.splice(1,2);
console.table(carrito);