//  IDS. Eric Márquez Salas
// Repetir Strings

//  .repeat  Permite repetir un String las veces indicadas
const producto ='Monitor de 20 Pulgadas';

const texto = ' Oferta única'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//  .split Permite dividir un String

const actividad = "Estoy trabajando JavaScript Moderno";

console.log(actividad.split(" "));

const hobbies = "leer, caminar, ecuchar música, escribir, aprender a programar";

console.log(hobbies.split(", "))

const tweet = "Aprendiendo JavaScript #ERMScript";

console.log(tweet.split('#'));

