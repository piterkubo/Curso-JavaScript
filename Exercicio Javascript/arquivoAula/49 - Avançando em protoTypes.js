// Quando criamos um obj a partr de um  outro, o base sera o prototype

// ele herdara tanto os metodos e propriedade de obj (o prototype do obj base)

// Quando os obj base para este novo.


//ex

let pessoas = {
    maos: 2

}


let pessoaNova = Object.create(pessoas);

console.log(pessoaNova.maos);

console.log(Object.getPrototypeOf(pessoaNova) == pessoas);