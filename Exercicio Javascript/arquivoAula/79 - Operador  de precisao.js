/* Operador de precisão

* Inserir o numero de ocorrencia entre {};


\d - Qualquer digito de caractere

\w- Um caracter alfanumerico('teste')

\s - Qualquer caractere de espaço em branco


Letras maiusculas não de negação


\D - Caracteres que não são digitos (NUMEROS)

\W - Caracteres não-alfanumerico (NUMEROS E LETRAS)

\S - Caracteres que não seja espaço em branco, quebra de linhas e tabs

. - Qualquer caractere, menos nova linha

*/



let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050")); // vai dar verdadeiro

console.log(telefone.test("99999-8080")); // vai dar verdadeiro

console.log(telefone.test("999-999"));

console.log(telefone.test("9999-9"));

console.log();

console.log();



const cep = /\d{5}-\d{3}/;

console.log(cep.test("07243-150"));
console.log(cep.test("150-07243"));
console.log(cep.test("0724-150"));

console.log();
console.log();


const telefoneComDDD = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefoneComDDD.test("(11)94716-5352"));
console.log(telefoneComDDD.test("(1)916-5352"));
console.log(telefoneComDDD.test("(11)94716-532"));