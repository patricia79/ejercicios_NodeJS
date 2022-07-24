/* Crea un objeto Operación que represente una operación básica de una calculadora entre dos operandos (suma, resta, 
    multiplicación, división, módulo)

Ejemplo de operación: Operacion("resta",3,2)

Esta clase, además, deberá tener un método calcula(), que ejecute tal operación.

Necesitamos acumular en un array 5 operaciones y ejecutarlas después en bucle mostrando el resultado por pantalla. */

function Calculadora(operacio, operandoA, operandoB) {
    const operaciones = [{
    "suma": function(a,b){return a+b}
    },{
    "resta": function(a,b){return a-b},
    },{
    "multiplicar": function(a,b){return a*b},
    },{
    "modulo": function(a,b){return a%b}
    }]
  for (let i = 0; i < operaciones.length; i++) {

    if(Object.keys(operaciones[i])[0] == operacio){
     return operaciones[i][operacio](operandoA, operandoB)

    } else {
        console.log('error')
    }

}
}

console.log(Calculadora("resta", 4, 2));