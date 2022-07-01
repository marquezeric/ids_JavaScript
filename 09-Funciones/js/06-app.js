//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function
//  cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
//  JavaScript cuenta con mas de 4000 funciones preescritas

//  -------- Parámetros por dedault -----------------
//  Los parámetros por Default son aquellos que se utilizarán en automático,
//  siempre y cuando no se le proporcionen los parámetros nesarios a la función

function saludar(nombre = 'Sin Nombre', apellido = 'Sin Apellido') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('','Márquez');