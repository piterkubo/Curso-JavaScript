/* Criar um regex que valie nome de um usuario no sistema 

Aceita letras  de a-z e numeros de 0-9 - _ min de caracteres e no maximo 16.



*/

/*

1 ^ Garante que a validaçõa começa no inicio da string

2 [a-zA-Z0-9_-]: Define o conjunto de caracteres permitindo (letras maiusculas, numeros _ e -)

3 {3,16} Espefica o tamanho min de 3  e no maximo 16 caracteres

4 $ Garante que a validaçã termina no final da string.

*/ 


const validarNome = /^[a-z0-9_-]{3,16}$/;

console.log(validarNome.test("piter_123"));

console.log(validarNome.test("as"))

console.log(validarNome.test("11111111111111111111111111"))