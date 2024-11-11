/*Crie uma regex que só aceite strings terminando com Id*/


// colocar b no final do id para marcar a string termina com id

const testandoString = /\d+ID\b/;

console.log(testandoString.test("Piter"));
console.log(testandoString.test("PiterID"));
console.log(testandoString.test("123ID"));