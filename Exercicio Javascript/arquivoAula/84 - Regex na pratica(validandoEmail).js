/* Regex na pratica, validando email


* Da seguinte forma, podemos validar o e-mail



\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha


*/

const validarEmail =  /\w+@\w+\.\w+/;

console.log(validarEmail.test("piterkubo@gmail.com"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("piterkubo@"));
console.log(validarEmail.test("piterkubo@guitta.com.br"));
