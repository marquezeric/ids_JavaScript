//  IDS. Eric Márquez Salas
//  Trabajar con números


const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

//console.log(typeof numero1);
console.log(numero1);
console.log(Number.parseInt(numero1));  //  Lo convierte a número
console.log(Number.parseFloat(numero2));  //  Lo convierte a número flotante
console.log(Number.parseInt(numero3))


//  Revisar si número son enteros o no lo son

console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));