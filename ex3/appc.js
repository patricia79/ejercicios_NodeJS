/* Necesitamos registrar datos de coches:

- Cilindrada
- Marca
- Matrícula
- Tipo combustible (gasolina, gasoil, híbrido, eléctrico)
- Color

Crea un array con 6 coches (con los parámetros que quieras). 

Setea el color de los coches en posiciones pares a "azul".

Setea el color de los coches en posiciones impares a "rojo".

Muestra la marca de los coches que tienen combustible de tipo "gasolina".  */

let Coche = require("./c.js");

try {

     // inicialitza l'array de 6 cotxes

     arrayCoches = [
          new Coche(2000, "BMW", "2451GJD", "rojo", "g"),
          new Coche(2000, "Audi", "2452GJD", "rojo", "g-oil"),
          new Coche(2000, "Lexus", "2453GJD", "rojo", "h"),
          new Coche(2000, "Mercedes-Benz", "2454GJD", "rojo", "e"),
          new Coche(2000, "Tesla", "2455GJD", "rojo", "g"),
          new Coche(2000, "Porsche", "2456GJD", "rojo", "g-oil"),

     ];

     // un coche que fallarà
     let cocheIncorrecto = new Coche(2000, "BMW", "2450GJD", "rojo", "ggoil");
     console.log(cocheIncorrecto);

} catch (error) {
     console.log("ERROR: " + error.message);
}

console.log(arrayCoches);

for (const coche of arrayCoches) {
    if (coche.combustible == "g") {
         console.log(coche.marca);
    }
}

for (let index = 0; index < arrayCoches.length; index++) {
    if (arrayCoches[index].combustible == "g") {
         console.log(arrayCoches[index].combustible);
    }
}
/*
haces un metodo setCoche(){
}
un for
que recorra el array
If ( i % 2 == 0 ) arrayCoches[i].color = "azul"
If ( i % 2 == 1 ) arrayCoches[i].color = "rojo" 

*/