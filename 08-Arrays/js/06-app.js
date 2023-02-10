/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
    Uso del SPREAD OPERATOR para agregar al inicio o al final de nuestro arreglo
*/

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

const producto3 = {
    nombre: "Celular Nova i8",
    precio: 900
}

//  Uso de la forma Declarativa para agregar valores a nuestro arreglo

let resultado;

resultado = [...carrito, producto];  //  La variable resultado hace una copia de nuestro arreglo carrito,
                                    //  haciendo uso del termino Spread Operator ...
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];  //  Pondrá el producto3 al principio del arreglo


console.table(resultado);
console.log(resultado.length);
