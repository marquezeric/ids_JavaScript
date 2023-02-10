/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
    Recorrer Arreglo, uso de for
*/

//  Mostrar el contenido del arreglo
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

//  Recorrer un arreglo (Leer todos los elementos)
//  Primer paso es saber cuanto mide el arreglo

console.log(`meses.length`);  //  Ojo muestra cuanto mide, mas no los elementos que tiene

//  Segundo paso, por medio de un for (loop) leemos los indices del arreglo
//  Con este for recorremos el arreglo, pero solo traemos los índices
for(let i = 0; i<meses.length; i++){
    console.log(i);
}
for( i = 0; i < meses.length; i++){
    console.log(i);
}

//  Segundo paso, por medio de un for (loop) pero ahora dinámicamente y que lea los valores del arreglo
for(let i = 0; i<meses.length; i++){
    console.log(meses[i]);
}