/*  Ing. Desarrollo de Software Eric Márquez Salas
    Funciones
    Se itiliza la palabra reservada function
    cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
    JavaScript cuenta con mas de 4000 funciones preescritas
*/
//  -------- Llamando a una funcion desde otra funcion -------------

iniciarApp();

function iniciarApp() {
    console.log('Inciando app...');
    segundaFuncion() //  Llamado a la segunda función
}


function segundaFuncion() {
    console.log('Segunda función respondiendo');
    usuarioAutenticado('emarquez');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario ${usuario} Autenticado exitosamente`);
}

