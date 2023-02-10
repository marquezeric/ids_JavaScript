/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Creamos un objeto dentro de otro objeto{{}}
*/
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
            clave: 'CH',
        }
    },
    distribuidor: {
        nombre: 'ERMS-Delivery',
        zona: 'Metropolitana',
        reparto: 45,
        unidades: {
            marca: 'suzuki',
            modelo: '2023',
            especificaciones : {
                cilindros: 4,
                combustible: 'Gasolina',
                tipo: 'Hatchback',
            }
        },
    }
    
}
//  Usando Destructuring  (Extraer el nombre y crear una variable del primer objeto)

//const {nombre} = producto;
//console.log(nombre);
//  Solo extraer la ultima propiedad del objeto fabricación
//const {pais} = producto.informacion.fabricacion;
//console.log(pais);

//  Extraer varias propiedades
 //const { nombre, informacion, informacion: { caracteristicas:{peso} }} = producto;
 //console.log(nombre);
 //console.log(peso);
 const {nombre, informacion, informacion:{ fabricacion, fabricacion:{pais}}} = producto;
 const {distribuidor:{unidades:{especificaciones:{tipo}}}} = producto;  //  Obtener el tipo de especificación de las unidades del distribuidor
 console.log(nombre);
 //console.log(informacion);
 console.log(pais);
 console.log(fabricacion);
 console.log(tipo);