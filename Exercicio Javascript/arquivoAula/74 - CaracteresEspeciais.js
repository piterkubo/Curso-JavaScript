// Caracteres especiais

/*

\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha



*/


//Ex na pratica


const pontoRegex = /./;

console.log(pontoRegex.test("asd"));

console.log(pontoRegex.test(" "));

console.log(pontoRegex.test("123"));

console.log(pontoRegex.test("123asd"));


console.log();
console.log();



const dRegex = /\d/; // Qualquer digito de caractere [0-9]


console.log(dRegex.test("asd"));

console.log(dRegex.test(" "));

console.log(dRegex.test("123"));

console.log(dRegex.test("123asd"));



console.log();
console.log();


const DRegex = /\D/; //Caracteres que não são digitos (NUMEROS)

console.log(DRegex.test("asd"));

console.log(DRegex.test(" "));

console.log(DRegex.test("123"));

console.log(DRegex.test("123asd"));




console.log();
console.log();


const sRegex = /\s/; //Qualquer caractere de espaço em branco

console.log(sRegex.test("asd"));

console.log(sRegex.test(" "));

console.log(sRegex.test("123"));

console.log(sRegex.test("123asd"));



console.log();
console.log();


const wRegex = /\w/; //Um caracter alfanumerico('teste')

console.log(wRegex.test("asd"));

console.log(wRegex.test(" "));

console.log(wRegex.test("123"));

console.log(wRegex.test("123asd"));






console.log();
console.log();


const WRegex = /\W/; //Caracteres não-alfanumerico (NUMEROS E LETRAS)


console.log(WRegex.test("asd"));

console.log(WRegex.test(" "));

console.log(WRegex.test("123"));

console.log(WRegex.test("123asd"));