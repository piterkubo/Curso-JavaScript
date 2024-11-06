// Regex com carateres especiais


/**
 * Podermos utilizar os caracteres especiais de verias forma veja * 
 */




let ano = /\d\d\d\d/;

console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

console.log();
console.log();

let palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("ano"));
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste") && "teste".length == 3); // propriedade para persistir em 3 caracteres