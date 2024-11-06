// Crie um objeto calculadora
// que tem os seguintes metodos somar, subtrair, multiplicar e dividir
// os metodos só devem aceitar dois parametros
// utilize cada um dos metodos e imprima os valores no console.


let calculador = {
   
    operacao1: "+",
    operacao2: "-",
    operacao3: "*",
    operacao4: "/",


    operacao1: function(a, b){
        return a + b;
    },

    operacao2: function(a, b){
        return a - b;
    },

    operacao3: function(a, b){
        return a * b;
    },

    operacao4: function(a, b){
        return a / b;
    },


}

console.log(calculador.operacao4(2,3));