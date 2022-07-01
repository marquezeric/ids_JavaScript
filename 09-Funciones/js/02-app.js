//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function
//  cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.

//  Primera forma   Declaración de función   (Function Declaration)
function sumar() {
    console.log(2+2);
}

sumar();


//  Segunda forma  Expresión de Función  (Function Expression) 
//  Una diferencia que hay entre una forma y otra, es que la function expression no se puede llamar 
//  antes de que se declare la función, en cambio la function declaration si puede ejecutarse antes
//  

const sumar2 = function(){
    console.log(3+3);
}

sumar2();
