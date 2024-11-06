// Prototypes 

// Um objeto fallback de outro obj

// Quando um obj recebe um requisicao de uma propriedade que nao tem, ela procura no prototype deste obj

// O prototype de obj criado do zero é obj que tem os metodos nativos da linguagem

//EX

let pessoas = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoas));

console.log(Object.getPrototypeOf(pessoas) == Object.prototype);




