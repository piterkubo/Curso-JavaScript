// Podemos definir variaveis com propriedades do obj com uma mesma notação diferente destructuring


const person = {
    name: "Jhon",
    lastName: "Doe"
}


const {name:fname, lastName: lname} = person; // criando o destructuring 

console.log(fname);
console.log(lname);