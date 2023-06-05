/*  Ing. Desarrollo de Software Eric Márquez Salas
    Funciones
    Se itiliza la palabra reservada function
    cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
    JavaScript cuenta con mas de 4000 funciones preescritas
*/
//  ----------  Parametros  y  Argumentos



function sumar(a, b) { // a y b son llamados parámetros
    console.log( a + b );
}
sumar(200, 184);

function multiplicar(a, b){
    console.log( a * b );
}
multiplicar(4,5);

function restar(a, b) {
    console.log( a - b);
}
restar(400, 235);


function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Eric', 'Márquez');

saludar('Eric' );  //  Este ejercicio marca el segundo parámetro como Undefined, ya que la función saludar
                    //  necesita dos parámetros, nombre y apellido