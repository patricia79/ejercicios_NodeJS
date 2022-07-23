class Jugadora {

    constructor(nom, edat, h, pes, posicio) {
        this.nom = nom;
        this.edat = edat;
        this.h = h;
        this.pes = pes;
        this.posicio = posicio;
        this.posicions =  ["a", "b", "a-p", "e", "p"];
       

        if (!this.posicions.includes(posicio)){
            throw new Error(posicio + " no és una posició valida")
        }

     }
}


module.exports = Jugadora;