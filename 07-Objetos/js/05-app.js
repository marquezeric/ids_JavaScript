//  IDS. Eric Márquez Salas
//  Trabajo con POO

//  Creamos un objeto dentro de otro objeto

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
        }
    }
}

const nombre = producto.nombre;
console.log(nombre);

console.log(producto.disponible);

//  Extraer peso y medida
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);
console.log(producto.informacion.fabricacion.pais);

