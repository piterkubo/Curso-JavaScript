/* Metodo Exec

* O metodo exec nos retorna um objeto com algumas informações sobre a regex;

* Se nada for encontrato, retorna null



\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha



*/

let teste =  /\d+/.exec("O numero 100");

console.log(teste);

console.log(teste.index);


console.log();
console.log();






const digitos = /\d+/;

console.log(digitos.exec("Tem numero 100 aqui"));
console.log(digitos.exec("Tem o numero aqui"));