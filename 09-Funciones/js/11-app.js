//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function

//  -----------------  Arrow Function  -----------------
//  ----Función te tipo expresion ------
const conducir = function(automovil) {
    console.log(`Estamos encendiendo un ${automovil}`);
}
conducir('Suzuki Scross');  //  Forma tradicional de pasar parámetros en funciones de tipo de expresión

//   ---- Transformando a Arrow Function
//  ----Los paréntesis se mantienen
// -----Se añade posterior del paréntesis =>
//  ----Cuando se tiene una función con una sola línea se eliminan las llaves
// -----Así como también cuando se tiene una solo línea las Arrow Function dan por implícito el return
// -----por consiguiente se elimina el console.log
const conducir2 = automovil2 => `Antes conducíamos el ${automovil2}`;
//  ---Si solo se usa un parámetro se puede precindir del paréntesis, si es mayor a un parámetro, se usarán los paréntesis
const conducir3 = (automovil3, potencia3, transmision3) => `Antes conducíamos el mismo ${automovil3} con un ${potencia3} y ${transmision3}`;  //  Los paréntesis del valor del parámetro no son necesarios


console.log(conducir2('Suzuki SX4'));
console.log(conducir3('Suzuki SX4', 'Motor 2.0', '4 velocidades'));
