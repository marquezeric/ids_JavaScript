/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Repetir Strings o separar - dividir
*/

//  .repeat  Permite repetir un String las veces indicadas
const producto ='Monitor de 20 Pulgadas';

const texto = ' Oferta única'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//  .split Permite dividir un String

const actividad = "Estoy trabajando con JavaScript Moderno";

console.log(actividad.split(" "));  //  Realiza una división a partir del caracter o los caracteres que se indiquen

const hobbies = "leer, caminar, ecuchar música, escribir, aprender a programar";

console.log(hobbies.split(", "))

const tweet = "Aprendiendo JavaScript #ERMScript";

console.log(tweet.split('#'));

