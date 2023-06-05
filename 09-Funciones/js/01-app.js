/*Ing. Desarrollo de Software Eric Márquez Salas
    Funciones   
    Se itiliza la palabra reservada ---function---
    cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
*/

//  Primera forma   Declaración de función   (Function Declaration)
function sumar() {
    console.log(2+2);
}

sumar();    //  llamado de función


//  Segunda forma  Expresión de Función  (Function Expression)
const sumar2 = function() {
    console.log( 3 + 3 );
}

sumar2();    //  llamado de función
