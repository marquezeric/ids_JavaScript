/*  *Ing. Desarrollo de Software Eric Márquez Salas
    Funciones   
    cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
    JavaScript funciones en dos etapas una de creación y otra de ejecución
*/


//  Primera forma   Declaración de función   (Function Declaration)

sumar();    // Se puede llamar nuestra function no importando que despues se defina 
function sumar() {
    console.log( 2 + 2 );
}

//sumar();


//  Segunda forma  Expresión de Función  (Function Expression) 
//  Una diferencia que hay entre una forma y otra, es que la function expression no se puede llamar 
//  antes de que se declare la función, en cambio la function declaration si puede ejecutarse antes
//  

// function expression
//  En este tipo de función no se puede llamar antes de que se defina, de lo contrario mandará mensaje de error
sumar2();   //  Deshabilitar para que pueda correr
const sumar2 = function(){
    console.log( 4 + 4 );
}

//sumar2(); //  Habilitar para que pueda correr
