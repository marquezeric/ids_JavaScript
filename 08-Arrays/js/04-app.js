// IDS-Eric Márquez Salas
//  Trabajo con arreglos

//  Agregar elementos al arreglo por inserción indirecta

//  Aunque nuestro arreglo este declarado como const los valores si pueden modificarse
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

meses[0] = "Diciembre"; //  Le indico que voy agregar el valor Diciembre en la posición del índice 0 (Sobreescribir)
meses[9] = "Septiembre";  //  Le podemos decir que se agregará un nuevo valor en un índice posterior

console.table(meses);  // mostrar el arreglo
console.log(meses.length);  //  mostrarmos de que tamaño es nuestro arreglo