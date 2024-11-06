/* Metodo Match

* O metodo Match funciona de forma similar ao exec 





\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha




*/





//Lembrando que é para buscar numeros....

let teste = "O numero 100".match(/\d+/);

console.log(teste);
console.log(teste.index);

console.log();
console.log();


const frase = "O numero 100 esta aqui".match(/\d+/);
const frase2 = "O numero esta aqui".match(/\d+/);


console.log(frase);

console.log(frase2);