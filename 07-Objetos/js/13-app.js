/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Programación Orientada a Objetos con JavaScript
------Uso de tres métodos para objetos que nos devuelven información de nuestro OBJETO--------
-----------Keys, Values, Entries-------------------
*/
//  Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto));  //  Retorna un arreglo con los keys del objeto o saber si la consulta de
                                    //   una base de datos fue exitosa.

console.log(Object.values(producto));  //  Retorna el valor de las keys del objeto


console.log(Object.entries(producto));  //  Retorna toda la información en forma de arreglo y en pares