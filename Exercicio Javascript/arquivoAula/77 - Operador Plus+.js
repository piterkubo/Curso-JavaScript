/* Operador Plus +

    * Quando um (+) esta apos alguma expressao, este elemento pode ser repetir mais de uma vez;

    * 
*/


let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test('123')); // vai dar true
console.log(muitosOuPoucosDigitos.test('123456789')); // vai dar true
console.log(muitosOuPoucosDigitos.test(''));


console.log();
console.log();

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test('1518'));
console.log(umOuMaisNumeros.test('dasdarfhkasjdfh'));