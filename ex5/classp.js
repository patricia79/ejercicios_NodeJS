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

class Pokemon {

    constructor(numero, nom, nivell, tipus){
        this.numero = numero;
        this.nom = nom;
        this.nivell = nivell;
        this.tipus = tipus;
        if(!["foc", "aigua", "planta", "elèctric", "terra"].includes(tipus)){
            throw new Error("Aquest tipus no és vàlid.");
            }
        this.atacs = [];
     }

     afegirAtac(atac) {
        this.atacs.push(atac);
     }

     sumarNivell(){
        let nouNivell = this.nivell + 2;
        return nouNivell;
     }
}

module.exports = Pokemon;