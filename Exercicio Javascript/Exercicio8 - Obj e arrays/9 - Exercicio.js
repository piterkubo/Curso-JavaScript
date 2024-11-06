// Crie um array a partir de uma frase
//Imprima cada palavra do array no console por meio de um for

let frase = "Estou realizando um teste "

let palavras = frase.split(" ");


for(let i = 0; i < palavras.length; i++){
    console.log(palavras[i]);
}