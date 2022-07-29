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

let arrayCoches = [];

let cotxe1 = new Coche(2000,"BMW", "2451GJD", "lila", "benzina")
let cotxe2 = new Coche(2000, "Audi", "2452GJD", "taronja", "g-oil")
let cotxe3 = new Coche(2000,"Lexus", "2453GJD", "blanc", "hibrid")
let cotxe4 = new Coche(2000,"Mercedes-Benz", "2454GJD", "negre", "electric")
let cotxe5 = new Coche(2000, "RangeRover", "2455GJD", "verd", "electric")
let cotxe6 = new Coche(2000, "Porsche", "2456GJD", "groc", "g-oil")


arrayCoches.push(cotxe1,cotxe2, cotxe3, cotxe4, cotxe5, cotxe6);

  // un coche que fallarà
  /*let cocheIncorrecto = new Coche(2000, "BMW", "2450GJD", "marro", "ggoil");
  console.log(cocheIncorrecto);*/
} catch (error) {
  console.log("ERROR: " + error.message);
}

console.log(arrayCoches);

for (const coche of arrayCoches) {
  if (coche.combustible == "benzina") {
    console.log(`Els cotxes que van amb el tipus de combustible: ${coche.combustible}, són : ${coche.marca}`);
  }
}
/*
for (let index = 0; index < arrayCoches.length; index++) {
  if (arrayCoches[index].combustible == "g") {
    console.log(arrayCoches[index].combustible);
  }
} 
*/

for (let index = 0; index < arrayCoches.length; index++) {
  if (index % 2 == 0) {
    console.log((arrayCoches[index].color = "vermell"));
  } else {
    console.log((arrayCoches[index].color = "blau"));
  }
 
}
/*
haces un metodo setCoche(){
}
un for
que recorra el array
If ( i % 2 == 0 ) arrayCoches[i].color = "azul"
If ( i % 2 == 1 ) arrayCoches[i].color = "rojo" 
 if (index % 2 == 1) {
    console.log((arrayCoches[index].color = "azul"));
  }
*/
