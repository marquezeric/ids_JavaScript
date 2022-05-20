//  IDS. Eric Márquez Salas
//  Trabajo con POO

//  Creamos un objeto dentro de otro objeto

//  DECLARAMOS EL OBJETO
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        caracteristicas : {
            peso: '12kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China',
        }
    }
}

//  Usando Destructuring  (Extraer el nombre y crear una variable del primer objeto)

//const {nombre} = producto;
//console.log(nombre);
//  Solo extraer la ultima propiedad del objeto fabricación
//const {pais} = producto.informacion.fabricacion;
//console.log(pais);

//  Extraer varias propiedades
 const { nombre, informacion, informacion: { caracteristicas:{peso} }} = producto;
 console.log(nombre);
 console.log(peso);