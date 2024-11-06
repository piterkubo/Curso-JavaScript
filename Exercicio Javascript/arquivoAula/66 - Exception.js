// Podemos criar erros no programa, caso alguma condição não seja atendida.

// Porem as exceptions abortam o programa, só geram o erro

let a = 1;

if(a != 2 ){
    throw new Error("O Valor de (A) não pode ser 1")
}


// ou




function Saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O parametro nome precisa ser string");

    }
    else {
        console.log(`Ola ${nome}.`)
    }
}

Saudacao("Piter");
Saudacao(5);