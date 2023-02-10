/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajar con números
*/

let resultado;
let resultado1;
let resultadosum;

resultado = 20 + 30 * 2;  //  Le da prioridad a la multiplicación

resultado = (20 + 30 ) * 2;  //    La prioridad de operación la tiene la operación que se encuentra dentro de los paréntesis

//  Ejercicio de sacar el 20% de descuento a la suma de los números dentro del paréntesis
resultado = (20 + 30 + 40 + 50 + 60 ) * .20;

//  Calcular el cargo de impuesto de una cantidad
resultadosum = ( 20 + 30 )
resultado1 = (20 + 30 ) * .16  //  Solo obtiene el impuesto del % 16
resultado = ( 20 + 30 ) * 1.16  //  En este caso el resultado ya contendrá el impuesto

console.log(resultadosum);
console.log(resultado1);
console.log(Math.round(resultado));