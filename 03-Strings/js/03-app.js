//  IDS. Eric Márquez Salas
// Concatenar Strings

const producto = "Monitor de 20 pulgadas ";
const precio = '$ 9800';
const promocion = ' El precio más bajo';
const unica = ' Garantizado';

//  Concatenación de variables
console.log(producto.concat(precio));
console.log(producto.concat(precio, promocion));
console.log(producto.concat(precio,promocion, unica));
//  Concatenación de variables más cadenas de textos
console.log(producto + " Con un precio de " + precio + " pesos");
console.log("La pantalla de 40\" tiene un precio de " + precio + " producto " + unica + " lléveselo " + promocion);
console.log("La pantalla de 40\" tiene un precio de " , precio , " producto " , unica , " lléveselo " , promocion);

//  Uso de template Strings  o  template literals
console.log(`La pantalla de 40\" tiene un precio de ${precio} producto ${unica} lléveselo  ${promocion}`);