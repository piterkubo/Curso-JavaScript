// Argumentos Opcionais//

function NomeComIdade(nome, idade){
    if(idade === undefined){
        console.log("Seu nome é " + nome);
    }

    else{
        console.log("Sua nome é " + nome + " e a sua idade é " + idade);
    }
}


NomeComIdade("Piter");


NomeComIdade("Piter", "39");



function soma (a, b){
    if(a === undefined || b ===  undefined){
        console.log("É necessario passar os 2 argumentos");
    }

    else{

        return a + b;
    }
}


console.log(soma(2));

console.log(soma(2,4))
