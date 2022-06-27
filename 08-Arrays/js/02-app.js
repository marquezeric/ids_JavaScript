// IDS-Eric Márquez Salas
//  Trabajo con arreglos

//  Obtención de datos de un arreglo
const numeros = [10, 20, 30, 40, 50];


console.log(numeros);
console.table(numeros);  //  Muestra nuestro arreglo en un tabla

//  Acceder al arreglo a un indice específico

console.log(numeros[1]);
console.log(numeros[3]);

//  Arreglo dentro de otro arreglo
const numerosnum = [10, 20, 30, 40, 50, ["Juan","Ricardo T","Elmer","Ricardo B","Eric"]];
console.table(numerosnum);
console.log(numerosnum[5][4]);