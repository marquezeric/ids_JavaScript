//  IDS-Eric Márquez Salas
//  Estructuras de Control

//  --------  Estructuras de Control --------

// ---------------Switch case---------------
//  -----En caso de que ocurra

const metodoPago = 'Tarjeta';

switch (metodoPago) {
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado');
        break;
}
