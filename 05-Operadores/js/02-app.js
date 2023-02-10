/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajar con operadores lógicos
*/

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//  Revisar si dos números son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2);

//  Comparador estricto con triple simbolo ===

console.log(numero1 === numero2);

console.log(numero1 === parseInt(numero2));  // Convierte  a numero2 a tipo Entero y ademas hace comparación estricta

console.log(typeof numero1);  //  Revisa que tipo de dato es nuestra variable
console.log(typeof numero2);

//  Comparar si son diferentes

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);  //  Password 1 es diferente a password 2
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
//  Comparador estricto si son diferentes y ademas se convierte en Integer
console.log(numero1 !== (parseInt(numero2)));