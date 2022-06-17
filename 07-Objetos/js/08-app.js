//Uso del strict, para evaluar las buenas practicas de programación en JavaScript, 
//de tal forma que cuando no se generen variables sin definir, JavaScript creará internamente la variable.
"use strict"

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); //  Con el uso de freeze evitamos que el objeto sea editado
// En el ejemplo arriba solo indicamos que el objeto producto no se le agregue otra propiedad como
// el de imagen

//producto.disponible = false;
//producto.imagen = "imagen.jpg";

//delete producto.precio; //  Borra la propiedad indicada, siempre y cuando
                        // el objeto no se encuentre bloquedo --freeze--

console.log(producto);

console.log(Object.isFrozen(producto));  //  Visualizar si el objeto esta congelado





