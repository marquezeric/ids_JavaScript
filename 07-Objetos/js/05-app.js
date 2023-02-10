/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Creamos un objeto dentro de otro objeto
*/

//  DECLARAMOS EL OBJETO
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
            peso: '12kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China',
            clave: 'CH',
        }
    },
    caracteristica: {
        color : 'Negro',
        marca : 'LG Electronics',

    }
}

console.log(producto);

const nombre = producto.nombre;
console.log(nombre);

console.log(producto.disponible);

//  Extraer información de acuerdo al objeto en que se encuentre
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.fabricacion.clave);
console.log(producto.caracteristica.color);
console.log(producto.caracteristica.marca);
