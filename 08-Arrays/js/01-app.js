/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
*/    
//  Primera forma de crear arreglos usamos la misma sintaxis de generar una variable u objeto, pero después
//    del signo igual usamos corchetes []

const numeros = [10, 20, 30, 40];

//  Segunda forma de crear arreglos 
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto');

console.log(numeros);
console.log(meses);

//  Arreglo que contiene datos de todo tipo, un arreglo puede contener objetos u otros arreglos

const deTodo = ["Hola", 10, true, "si", null, {nombre: 'Eric', trabajo: 'Desarrollador'},[2,4,6]]
console.log(deTodo);