/* Choice pattern


* Podemos colocar uma instruçõa na regex que funciona como um || (or) das condições;



\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha




*/


let fruta = /\d+ (bananas|maçãs|laranjas)/;


console.log(fruta.test("10 bananas"));
console.log(fruta.test("25 batatas"));
console.log(fruta.test("10 laranjas"));


console.log();
console.log();


const reg = /\w+: (Piter|Lucas|Viviana)/;


console.log(reg.test("Nome: Piter"));
console.log(reg.test("Nome: Pedro"));
console.log(reg.test("Nome: Lucas"));