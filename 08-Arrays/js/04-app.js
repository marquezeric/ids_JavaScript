/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
    Insertar nuevos elementos al Arreglo
*/

//  Agregar elementos al arreglo por inserción indirecta

//  Aunque nuestro arreglo este declarado como const los valores si pueden modificarse
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

meses[0] = "Diciembre"; //  Le indico que voy agregar el valor Diciembre en la posición del índice 0 (Sobreescribir)
meses[8] = "Septiembre";  //  Le podemos decir que se agregará un nuevo valor en un índice posterior
meses[9] = "Aquiles";  //  Agrego nuevamente un mes nuevo en la última posición

console.table(meses);  // mostrar el arreglo
console.log(meses.length);  //  mostrarmos de que tamaño es nuestro arreglo