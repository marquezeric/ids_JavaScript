//  IDS-Eric Márquez Salas
//  Estructuras de Control

//  --------  Estructuras de Control --------
//  --------  Operadores Lógicos ------------



const dinero = 600;
const totalAPagar = 500;
const tarjeta = true;
const cheque = false;


if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
}else if (tarjeta) {
    console.log('Si puedo pagar porque traigo la tarjeta');
}else if(cheque){
    console.log('Si tengo un Cheque');
}else {
    console.log('Fondos insuficientes');
}

//  Cabe mencionar que cuando se requiera utilizar varias condiciones, será mejor utilizar SWITCH