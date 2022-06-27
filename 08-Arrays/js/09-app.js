//  IDS-Eric Márquez Salas
//  Trabajo con arreglos

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Pantalla Plana", precio: 520},
    {nombre: "Tablet", precio: 450},
    {nombre: "Audifonos", precio: 350},
    {nombre: "Teclado", precio: 100},
    {nombre: "Celular", precio: 470},
]

//  Iteración para mostrar el contenido del arreglo
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

//  Iteración para mostrar el contenido el campo nombre
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

//  Usando templates estrings para mostrar mas valores del arreglo con el mismo for loop
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//  ------------------- Utilizando métodos propios de JavaScript  Array Methods-----------------------

carrito.forEach( function(prodcuto) {
    console.log(`${prodcuto.nombre} - Precio: ${prodcuto.precio}`);
})