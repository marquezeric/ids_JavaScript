/*Ing. Desarrollo de Software Eric Márquez Salas
    Trabajos con Arrays
*/

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

console.log(`Este es el nuevo arreglo usando map ${nuevoarreglo}`);

const intellectual = [
    {nombre: "Patentes", figura: "Invenciones", clave: "P"},
    {nombre: "Diseños Industriales", figura: "Invenciones", clave: "N"},
    {nombre: "Modelos de Utilidad", figura: "Invenciones", clave: "U"},
    {nombre: "Variedades Vegetales", figura: "Invenciones", clave: "V"},
    {nombre: "Inscripciones de Invenciones", figura: "Inscripciones", clave: "S"},
    {nombre: "Marcas", figura: "Signos Distintivos", clave: "M"},
    {nombre: "Avisos Comerciales", figura: "Signos Distintivos", clave: "A"},
    {nombre: "Nombres Comerciales", figura: "Signos Distintivos", clave: "T"},
    {nombre: "Nombres de Dominio", figura: "Nombres de Dominio", clave: "E"},
    {nombre: "Denegaciones Provisionales", figura: "Signos Distintivos", clave: "Y"},
    {nombre: "Derechos de Autor", figura: "Signos Distintivos", clave: "D"},
    {nombre: "Inscripciones de Signos Distintivos", figura: "Signos Distintivos", clave: "S"},

]

const impi = intellectual.map(function(tipasunto){
    return `${tipasunto.nombre} - figura: ${tipasunto.figura} - clave: ${tipasunto.clave}`;
})

console.log(impi);
console.table(impi);
console.log(impi.length);