/*Operador not

* Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;

* lembrando que combinação serão aceitas, o negado é apenas se bate com o set

* Mais adiante apreendemos negar de outras formas.

* (^) usuando o operador not 
*/

let conjuntoDiferente = /[^123]/;

console.log(conjuntoDiferente.test("1112"));
console.log(conjuntoDiferente.test("14")); // vai dar true 
console.log(conjuntoDiferente.test("1"));


console.log();
console.log();


const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a")); // vai dar true 



console.log();
console.log();



const notAZ = /[^a-z]/;

console.log(notAZ .test("a")); 
console.log(notAZ .test("abcd"));
console.log(notAZ .test("Aqui tem a")); // vai dar true
console.log(notAZ .test("123")); // vai dar true
