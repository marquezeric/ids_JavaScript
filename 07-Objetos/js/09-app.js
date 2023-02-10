/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Proteger nuestros objetos para que no puedan ser reescritos
    Uso de SEAL --  Evita crear o eliminar propiedades, pero si se pueden modificar
    las propiedades ya existentes
*/

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto);

producto.disponible = false;    //  Modificación permitidad por que la propiedad disponible
                                //  si se encuentra en nuestro objeto producto.
producto.imagen = "imagen.jpg";  //  NO se agregara porque es nueva propiedad y porque esta sellado nuestro objeto

console.log(producto);

console.log(Object.isSealed(producto));  //  Visualizar si nuestro objeto se encuentra sellado