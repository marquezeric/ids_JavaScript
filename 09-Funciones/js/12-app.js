//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function

//  -----------------  Arrow Function en un forEach y un map -----------------

const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500},
    {nombre: "Pantalla Plana", precio: 520},
    {nombre: "Tablet", precio: 450},
    {nombre: "Audifonos", precio: 350},
    {nombre: "Teclado", precio: 100},
    {nombre: "Celular", precio: 470},
]

//--------------  Iteración con map y función normal

//const nuevoarreglo = carrito.map(function(producto) {
//    return `${producto.nombre} - Precio: ${producto.precio}`;
//})

//---- Aplicando con un Arrow Function

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio ${producto.precio}`);


//--------------  Iteración con forEach y función normal

//carrito.forEach(function(producto) {
//    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
//})



//--------------  Iteración con forEach y Arrow Function

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));


console.log(nuevoArreglo);

console.table(carrito);
console.log(carrito.length);