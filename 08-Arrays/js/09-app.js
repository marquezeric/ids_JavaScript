/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
*/
const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500, pais: "China"},
    {nombre: "Pantalla Plana", precio: 520, pais: "China"},
    {nombre: "Tablet", precio: 450, pais: "E.U.A."},
    {nombre: "Audifonos", precio: 350, pais: "Austria"},
    {nombre: "Teclado", precio: 100, pais: "México"},
    {nombre: "Celular", precio: 470, pais: "Corea"},
]

//  Iteración para mostrar el contenido del arreglo
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);  //  Recorre el arreglo y mostrará las propiedades del arreglo
}

//  Iteración para mostrar el contenido el campo nombre
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);  //  Recorre el arreglo y mostrará solo la propiedad NOMBRE
}

//  Usando templates estrings para mostrar mas valores del arreglo con el mismo for loop
for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre del producto ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//  ------------------- Utilizando métodos propios de JavaScript  Array Methods-----------------------
//      La manera en que itera es a través de FOREACH
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Pais: ${producto.pais}`);
})