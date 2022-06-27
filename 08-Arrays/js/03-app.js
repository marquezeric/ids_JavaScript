// IDS-Eric Márquez Salas
//  Trabajo con arreglos
//  Mostrar el contenido del arreglo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

//  Recorrer un arreglo (Leer todos los elementos)
//  Primer paso es saber cuanto mide el arreglo

console.log(meses.length);

//  Segundo paso, por medio de un for (loop) leemos los indices del arreglo
for(let i = 0; i<meses.length; i++){
    console.log(i);
}

//  Segundo paso, por medio de un for (loop) pero ahora dinámicamente y que lea los valores del arreglo
for(let i = 0; i<meses.length; i++){
    console.log(meses[i]);
}