/*
Escriu una funció que retorni promeses que es resolen en un temps aleatori entre 0 i 5 segons. Executa-la 10 vegades de 
manera que puguis indentificar quin és l'ordre en el que s'han executat i el temps en el que s'han resolt, escrivint a un 
array les dues coses cada vegada que es resolgui una, de manera que a l'array contingui algo així:

{ num: 8, time: '515' } 
{ num: 7, time: '626' } 
{ num: 6, time: '867' } 
{ num: 9, time: '1047' } 
{ num: 1, time: '1402' } 
{ num: 0, time: '2864' } 
{ num: 2, time: '3153' } 
{ num: 5, time: '3789' } 
{ num: 4, time: '3948' } 
{ num: 3, time: '4004' }

*/


let datos = [];

const prova = (num) => {
    let time = 5000 * Math.random()
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ num, time });
        }, time);
    });
};

for (let i = 1; i <= 10; i++) {
    const insertFunction = async () => {
        datos[i] = console.log(await prova(i))
    }
    insertFunction()
};

for (let i = 0; i < 10; i++) {
    datos[i]
};
