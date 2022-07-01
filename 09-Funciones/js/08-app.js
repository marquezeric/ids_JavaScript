//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function
//  cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
//  JavaScript cuenta con mas de 4000 funciones preescritas



//  -------- Funciones que retornan valores -------------

function sumar(a,b) {
    //console.log( a + b ); //  Para que retorne un valor es necesario un return
    return a + b;
}

//sumar(7, 4);  // una vez que se inserte la función "return"  mi función necesita alojar el valor de retorno en una variable

const resultado = sumar(47,22);

console.log(resultado);

//  -----------  Ejercicio Avanzado -------------------

let total = 0; //  Conforme se vaya agregando va ir tomando diferentes valores

function agregarCarrito(precio) { // En esta función se recibirá el parámetro precio
    return total += precio;  //  La variable "total" ira sumando lo que vaya conteniendo el parametro "precio"
}

function calcularImpuesto(total) {  // En esta función se recibira el parámetro total
    return total * 1.16;
}

total = agregarCarrito(300);  //  Agregando elemento a carrito con precio de 300
total = agregarCarrito(100);  //  Agregando elemento a carrito con precio de 100
total = agregarCarrito(600);  //  Agregando elemento a carrito con precio de 600
total = agregarCarrito(250);  //  Agregando elemento a carrito con precio de 250
//  El precio de cada uno de los elemetos se le asgina a la variable "total"


const totalPagar = calcularImpuesto(total);  // Se crea la variable nueva "totalPagar" que llama a la función "calcularImpuesto"
                                             //  que a su vez lleva el total
console.log(`El total a pagar es de ${totalPagar}`)

console.log(total);
