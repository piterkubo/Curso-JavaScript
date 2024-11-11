/* Crie uma regex que só aceita letras maiusculas e depois */



const letrasMauisculas = /[A-Z]/;

console.log(letrasMauisculas.test('piter'));
console.log(letrasMauisculas.test('PITER'));
console.log(letrasMauisculas.test('123'));