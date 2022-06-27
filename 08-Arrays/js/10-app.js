//  IDS-Eric Márquez Salas
//  Trabajo con arreglos

//  Iterando un arreglo con forEach  o  map

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Pantalla Plana", precio: 520},
    {nombre: "Tablet", precio: 450},
    {nombre: "Audifonos", precio: 350},
    {nombre: "Teclado", precio: 100},
    {nombre: "Celular", precio: 470},
]

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})


//  Diferencia entre forEach y map, es que map genera un nuevo arreglo y forEach NO


carrito.map(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

//  Genrando un nuevo arreglo con map se realiza de la siguiente manera.

const nuevoarreglo = carrito.map(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoarreglo);

const intellectual = [
    {nombre: "Patentes", figura: "Invenciones"},
    {nombre: "Diseños Industriales", figura: "Invenciones"},
    {nombre: "Modelos de Utilidad", figura: "Invenciones"},
    {nombre: "Variedades Vegetales", figura: "Invenciones"},
    {nombre: "Inscripciones de Patentes", figura: "Invenciones"},
    {nombre: "Marcas", figura: "Signos Distintivos"},
    {nombre: "Avisos Comerciales", figura: "Signos Distintivos"},
    {nombre: "Nombres Comerciales", figura: "Signos Distintivos"},
    {nombre: "Denegaciones Provisionales", figura: "Signos Distintivos"},
    {nombre: "Derechos de Autor", figura: "Signos Distintivos"},
    {nombre: "Inscripciones de Signos Distintivos", figura: "Signos Distintivos"},
]

const impi = intellectual.map(function(tipasunto){
    return `${tipasunto.nombre} - figura: ${tipasunto.figura}`;
})

console.log(impi);
console.table(impi);
console.log(impi.length);