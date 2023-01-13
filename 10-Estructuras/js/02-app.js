//  IDS-Eric Márquez Salas
//  Estructuras de Control

const puntaje = 1000;  //  Recordar que un solo signo =  es asignación  -- Tipo de datos Integer
const puntaje2 = "1000"  // Tipo de dato String

// --- Se compara si es igual una condición, recordar que dos signos == significa comparar  y != Diferente
if (puntaje === "1000") {   //  Uso del comparador estricto es mas remcomendable usarlo 
    console.log('Si es igual');
}else {
    console.log('No es igual');
}

//  El comparador estricto, revisa el tipo de dato y también por el valor de mi variable


if (puntaje !== "1000") {
    console.log('Si es diferente');
}else{
    console.log('No, no es diferente');
}