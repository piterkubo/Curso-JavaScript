/* Regex na pratica, validando Datas


* Da seguinte forma, podemos validar a data de nascimento



\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha


*/


let validarDatadeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDatadeNasc.test("18/04/1985"));
console.log(validarDatadeNasc.test("25/12/15"));
console.log(validarDatadeNasc.test("1/0/15"));
console.log(validarDatadeNasc.test("10/11/2015"));