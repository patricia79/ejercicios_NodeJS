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
