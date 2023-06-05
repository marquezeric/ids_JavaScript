/*  Ing. Desarrollo de Software Eric Márquez Salas
    Funciones   
    Se itiliza la palabra reservada function
    cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
    JavaScript cuenta con mas de 4000 funciones preescritas
*/

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2));  //  Esto es una función y lo que puede llevar dentro del paréntesis se llama argumento
console.log(numero2);
console.log(numero1.toString());  //  Esto es un método y lo que puede llevar dentro del paréntesis se llama parámetro


function sumar() {
    console.log(numero1 + numero2);
}
sumar()

/*console.log(parseInt(numero2));
console.log(parseInt(numero1));
const sumar2 = function() {
    console.log(numero1 + numero2);
}

console.log(sumar2);*/