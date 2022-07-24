/* Necessitem enregistrar informació de jugadors de basket: 

- Nom
- Edat
- Alçada
- Pes
- Posició (Base, Escolta, Aler, Aler-Pivot, Pivot)

Enregistrarem informació d'un conjunt de jugadors (8 en total).

Mostra el nom i l'alçada dels jugadors que pasen dels 2 metres d'alçada.

Mostra el nom i l'edad dels jugadors que tenen menys de 21 anys.  */


let Jugadora = require("./class_Jugadora.js");

try {

     // inicialitza l'array de jugadores
     arrayJugadores = [
          new Jugadora("Sigrun", 20, 201, 98, "b"),
          new Jugadora("Sieglinde", 22, 198, 98, "b"),
          new Jugadora("Waltraute", 20, 201, 98, "b"),
          new Jugadora("Woglinde", 22, 198, 98, "b"),
          new Jugadora("Ortrude", 22, 201, 98, "b"),
          new Jugadora("Brunhilde", 20, 198, 98, "b"),
          new Jugadora("Fricka", 20, 201, 98, "b"),
          new Jugadora("Erda", 20, 198, 98, "b"),
          new Jugadora("Gutrune", 20, 201, 98, "b"),
     ];
 
     // una jugadora que fallarà
     let jugadoraIncorrecta = new Jugadora("Waltraute", 20, 198, 98, "bjhfksdgfjh");
     console.log(jugadoraIncorrecta);

} catch (error) {
     console.log("ERROR: " + error.message);
}

// console.log(arrayJugadores);

// mostra les jugadores de més de dos metres (nom i alçada)
console.log("Mes de 2 m");

for (let index = 0; index < arrayJugadores.length; index++) {
     if (arrayJugadores[index].h > 2) {
          console.log(arrayJugadores[index].nom, arrayJugadores[index].h);
     }
}

for (const jugadora of arrayJugadores) {
     if (jugadora.h > 2) {
          console.log(jugadora.nom, jugadora.h);
     }
}


// mostra les jugadores de menys de 21 anys (nom i edat)
console.log("Menys de 21 anys");

for (let index = 0; index < arrayJugadores.length; index++) {
     if (arrayJugadores[index].edat < 21) {
          console.log(arrayJugadores[index].nom, arrayJugadores[index].edat);
     }
}
