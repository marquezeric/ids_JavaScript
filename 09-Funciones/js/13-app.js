//  IDS-Eric Márquez Salas
//  Funciones
//  Se itiliza la palabra reservada function

// ------Uso de Array Faunctions en métodos de propiedad

//const reproductor = {
//    reproducir: function(id, titulo, artista) {
//        console.log(`Reproduciendo canción con número: ${id} título: ${titulo} artista: ${artista}`);
//    },
//    pausar: function(id) {
//        console.log(`pausando canción número ${id}`);
//    },
//    borrar: function(id) {
//        console.log(`Borrando canción número ${id} `);
//    },
//    adelantar: function(titulo) {
//        console.log(`Adelantando canción ${titulo}`);
//    },
//    atrasar: function(id) {
//        console.log(`Retrasando canción ${id}`);
//    }
//}

//reproductor.reproducir(30, 'Aún', 'Coda');
//reproductor.reproducir(31, 'Tres Lunares', 'Kerigma');
//reproductor.pausar(31);
//reproductor.borrar('31');
//reproductor.adelantar('Aun');
//reproductor.atrasar(31);



const reproductor = {
    reproducir: (id, titulo, artista) => console.log(`Reproduciendo canción con número: ${id} - ${titulo} del ${artista}`),
    pausar: id => console.log(`Pausando canción número: ${id}`),
    adelantar: titulo => console.log(`Adelantando canción: ${titulo}`),

    //  Usando set y get

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}
//  ---Funciona con set y get
reproductor.nuevaCancion = 'Si te tuviera aquí';
reproductor.obtenerCancion;


reproductor.reproducir(69, 'Tres Lunares');
reproductor.pausar(69);
reproductor.adelantar('Tres Lunares');
