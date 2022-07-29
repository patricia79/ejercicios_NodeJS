/*   Necesitamos registrar datos de Pokémon:

- Número
- Nombre
- Nivel
- Tipo (fuego, agua, planta, eléctrico y tierra)
- Ataques: array de objetos {nombre: impactrueno, potencia: 120}

Registramos un equipo de 6 Pokémon.

Mostrar el nombre de los pokémon tipo eléctrico.

Mostrar el listado de ataques de cada Pokémon.

Subir 2 niveles a los Pokémon de tipo agua.   */


let Pokemon = require("./classp");
let Atac = require("./classa");

let pokemon1 = new Pokemon(1, "Bulbasaur", 1, "planta");
let pokemon2 = new Pokemon(2, "Charmander", 1, "foc");
let pokemon3 = new Pokemon(3, "Squirtle", 1, "aigua");
let pokemon4 = new Pokemon(4, "Pikachu", 1, "elèctric");
let pokemon5 = new Pokemon(5, "Raichu", 1, "terra");
let pokemon6 = new Pokemon(6, "Snorlax", 1, "terra");

let arrayPokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

let atac1 = new Atac("impactrueno", 120);
let atac2 = new Atac("bola", 120);
let atac3 = new Atac("bombolla", 120);
let atac4 = new Atac("llàmpec", 120);
let atac5 = new Atac("esgarrapar", 120);
let atac6 = new Atac("copdecua", 120);

let arrayAtacs = [atac1, atac2, atac3, atac4, atac5, atac6];

pokemon1.afegirAtac(atac1);
pokemon1.afegirAtac(atac2);
pokemon2.afegirAtac(atac3);
pokemon2.afegirAtac(atac4);
pokemon3.afegirAtac(atac5);
pokemon3.afegirAtac(atac6);
pokemon4.afegirAtac(atac1);
pokemon4.afegirAtac(atac6);
pokemon5.afegirAtac(atac2);
pokemon5.afegirAtac(atac3);
pokemon6.afegirAtac(atac4);
pokemon6.afegirAtac(atac5);

for (const pokemon of arrayPokemons) {
    if (pokemon.tipus == "elèctric") {
         console.log(`La Pokemona ${pokemon.nom} és de tipus ${pokemon.tipus}`);
    }
}

for (const pokemon of arrayPokemons){
    console.log(`La Pokemona ${pokemon.nom} te els següents atacs:`);
}

console.log(arrayPokemons);
console.table(arrayPokemons);
console.table(arrayAtacs);

for (const pokemon of arrayPokemons) {
    if (pokemon.tipus == "aigua") {
       
         console.log(`La Pokemona ${pokemon.nom} és de tipus ${pokemon.tipus} i te un nou nivell de ${ pokemon. sumarNivell()}`);
    }
}
