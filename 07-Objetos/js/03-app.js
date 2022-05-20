//  IDS. Eric Márquez Salas
//  Trabajo con POO


const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//  Agregar nuevas propiedades despues de la ejecucion del proyecto

producto.cantidad = 25;
producto.imagen = "imagen.jpg";

//  Elimninar propiedades después de la ejecución del proyecto

delete producto.disponible;

console.log(producto);