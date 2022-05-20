//  IDS. Eric Márquez Salas
//  Trabajar con operadore lógicos

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//  Revisar si dos números son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2);

//  Comparador estricto con triple simbolo ===

console.log(numero1 === numero2);

console.log(numero1 === parseInt(numero2));

console.log(typeof numero1);
console.log(typeof numero2);

//  Comparar si son diferentes

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
//  Comparador estricto si son diferentes y ademas se convierte en Integer
console.log(numero1 !== (parseInt(numero2)));