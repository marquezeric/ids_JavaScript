/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
    Obtener valores de nuestro arreglo
*/
//  Obtención de datos de un arreglo
const numeros = [10, 20, 30, 40, 50];


console.log(numeros);
console.table(numeros);  //  Muestra nuestro arreglo en un tabla

//  Acceder al arreglo a un indice específico (Posición)

console.log(numeros[1]);
console.log(numeros[3]);

//  Arreglo dentro de otro arreglo
const numerosnum = [10, 20, 30, 40, 50, ["Juan Rivera","Ricardo Torres","Elmer Meza","Ricardo Buendía","Eric Márquez"]];
console.table(numerosnum);
console.log(numerosnum[5][4]);  //  Extraer el valor del arreglo del arreglo