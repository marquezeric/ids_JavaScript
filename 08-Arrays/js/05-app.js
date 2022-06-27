//  IDS-Eric Márquez Salas
//  Trabajo con arreglos

//  Uso de métodos  PUSH, UNSHIFT dentro de los arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

//  Agregar al final del arreglo sin saber que valor se encuentra al final de nuestro arreglo

meses.push('Septiembre');


console.table(meses);
console.log(meses.length);

// --------- Ejemplo de un carrito de compras--------

const carrito = [];

//  Definir producto

const producto = {
    nombre: "Monitor HP 32 Pulgada",
    precio: 400
}

const producto2 = {
    nombre: "Laptop Asus Pro ",
    precio: 700
}

carrito.push(producto);  //  Forma imperativa de agregar valores al arreglo
carrito.push(producto2);

const producto3 = {
    nombre: "Celular Nova P9",
    precio: 900
}

//carrito.push(producto3);  //  Agregará al final nuestro prodcuto3
//  Si queremos que producto3 se agregue pero al principio de nuestro arreglo y no al final que es como sucedería con PUSH
//  Utlizamos UNSHIFT
carrito.unshift(producto3);

console.table(carrito);  //  Mostramos todo nuestro arreglo
console.log(carrito.length);  //  Monstramos cuanto mide nuestro arreglo
