/* Regex na pratica validando dominios)


* Da seguinte forma, podemos validar um dominio.



\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha


*/



let validarDominio = /[?www.]\w+\.com|.com.br/


console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google."));
console.log(validarDominio.test("www"));
console.log(validarDominio.test("www.guitta.com.br"));
console.log(validarDominio.test("kubotec.com.br"));



