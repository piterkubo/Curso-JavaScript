/*Operador ?


* Faz com que o digito anterior seja opcional


*/


let Opcional = /Prova\s?\d?/;


console.log(Opcional.test("Prova"));


console.log(Opcional.test("Prova 1"));

console.log(Opcional.test("Prova 2 "));


console.log();
console.log();




const padrao = /Abacax?i/; // deixando o X de abacaxi opcional 

console.log(padrao.test("Abacaxi"));

console.log(padrao.test("Abacai"));

console.log();
console.log();

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));

console.log(padrao2.test("123a"));

console.log(padrao2.test("123 "));