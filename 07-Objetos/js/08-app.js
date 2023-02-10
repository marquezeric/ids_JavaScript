/*Ing. Desarrollo de Software Eric Márquez Salas
    Curso de JavaScript Moderno
    Trabajo con Programación Orientada a Objetos POO
    Proteger nuestros objetos para que no puedan ser reescritos
    Uso de FREEZE
*/


//Uso del strict, para evaluar las buenas practicas de programación en JavaScript, 
//de tal forma que cuando no se generen variables sin definir, JavaScript creará internamente la variable.
"use strict"  // El uso de esta línea es para que el desarrollardor defina correctamente las variables

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

//  Monstrará error ya que se esta intentado modificar la llave disponible y agregar la llave imagen

//  delete producto.precio; //  Borra la propiedad indicada, siempre y cuando
                        // el objeto no se encuentre bloquedo --freeze--

console.log(producto);

console.log(Object.isFrozen(producto));  //  Visualizar si el objeto esta congelado





