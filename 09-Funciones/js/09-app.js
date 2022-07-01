//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function
//  cuando se quiera visualizar el resultado de nuestra función solo llamamos a nuestra función.
//  JavaScript cuenta con mas de 4000 funciones preescritas

//  -------- Añadir Funciones dentro Objetos -------------
//  ---------Métodos de propiedad---------------
const reproductor = {
    reproducir: function(id, titulo, artista) {
        console.log(`Reproduciendo canción con número: ${id} título: ${titulo} artista: ${artista}`);
    },
    pausar: function(id) {
        console.log(`pausando canción número ${id}`);
    },
    borrar: function(id) {
        console.log(`Borrando canción número ${id} `);
    },
    adelantar: function(titulo) {
        console.log(`Adelantando canción ${titulo}`);
    },
    atrasar: function(id) {
        console.log(`Retrasando canción ${id}`);
    }
}

reproductor.reproducir(30, 'Aún', 'Coda');
reproductor.reproducir(31, 'Tres Lunares', 'Kerigma');
reproductor.pausar(31);
reproductor.borrar('31');
reproductor.adelantar('Aun');
reproductor.atrasar(31);

//  ---------------  Segundo ejercicio de funciones dentro de objetos  ----------------
const conducir = {
    encender: function(auto) {
        console.log(`Estamos encendiendo un ${auto}`);
    },
    frenar: function(frenos) {
        console.log(`Revisando sistema de frenos con ${frenos}`);
    },
    seguridad: function(airbag) {
        console.log(`Revisando sistema de seguridad ${airbag}`);
    },
    niveles: function(niveles) {
        console.log(`Revisando los niveles de ${niveles}`)
    }
}

conducir.encender('Suzuki SX4 Over');
conducir.frenar('Balatas ceramicas');
conducir.seguridad('Bolsas de aire');
conducir.niveles('Aceite, Liquido Frenos, Refrigerante, Aire neumaticos')