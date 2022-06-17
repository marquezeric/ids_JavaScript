//  IDS-Eric Márquez
//  Programación Orientada a Objetos con JavaScript
//  Uso de seal --  Evita que los atributos de nuestras propiedades sean modificadas,
//  así como también evita que se agreguen mas propiedades. Pero si se pueden modificar
//  las propiedades ya existentes

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