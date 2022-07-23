/* Crea un objeto Operación que represente una operación básica de una calculadora entre dos operandos (suma, resta, 
    multiplicación, división, módulo)

Ejemplo de operación: Operacion("resta",3,2)

Esta clase, además, deberá tener un método calcula(), que ejecute tal operación.

Necesitamos acumular en un array 5 operaciones y ejecutarlas después en bucle mostrando el resultado por pantalla. */


class Operacion {

       
    constructor(operacion, num1, num2) {
       
        this.operacion = operacion;
        this.num1 = num1;
        this.num2 = num2;
    }

    calcula() {

        switch (this.operacion) {

            case "suma":
                return this.num1 + this.num2;
            case "resta":
                return this.num1 - this.num2;
            case "multiplicacion":
                return this.num1 * this.num2;
            case "division":
                return this.num1 / this.num2;
            case "modulo":
                return this.num1 % this.num2;
        }
    }
}