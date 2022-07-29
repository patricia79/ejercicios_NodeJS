class Coches {
    
    constructor(cilindrada, marca, matricula, color, combustible){
        this.cilindrada = cilindrada;
        this.marca = marca;
        this.matricula = matricula;
        this.color = color
        this.combustible = combustible;
    
        if(!["benzina", "gasoil", "hibrid", "electric"].includes(combustible)){
            throw new Error("Aquest no és una carburant vàlid.")
            }
 }
}

module.exports = Coches;
   