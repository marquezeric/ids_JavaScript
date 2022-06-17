//  IDS. Eric Márquez Salas
//  Trabajo con POO


const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//  Agregar nuevas propiedades después o fuera del objeto

producto.cantidad = 25;
producto.imagen = "imagen.jpg";

//  Elimninar propiedades fuera del objeto

delete producto.disponible;

console.log(producto);