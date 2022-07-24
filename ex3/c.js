

class Coches {

    constructor(cilindrada, marca, matrícula, color, combustible){
    this.cilindrada = cilindrada
    this.marca = marca
    this.matrícula = matrícula
    this.color = color
    this.combustible = combustible
    this.tipus_combustible =  ["benzina", "g-oil", "hibrid", "electric"];
    
    if (!this.tipus_combustible.includes(combustible)){
        throw new Error(tipus_combustible + " no és un combustible")
    
    }
    
    }
    }

   module.exports = Coches;