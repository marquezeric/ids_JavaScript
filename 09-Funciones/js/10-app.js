//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function

//  -----------------  Arrow Function  -----------------
//  ----Función te tipo expresion ------
const conducir = function() {
        console.log(`Estamos encendiendo un Suzuki`);
    }

//   ---- Transformando a Arrow Function
//  ----Los paréntesis se mantienen
// -----Se añade posterior del paréntesis =>
//  ----Cuando se tiene una función con una sola línea se eliminan las llaves
// -----Así como también cuando se tiene una solo línea las Arrow Function dan por implícito el return
// -----por consiguiente se elimina el console.log
const conducir2 = () => 'Estamos enciendiendo Suzuki SX4';


console.log('Llamado a la función',conducir2());
