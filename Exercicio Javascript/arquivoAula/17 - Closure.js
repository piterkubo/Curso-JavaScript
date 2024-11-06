/*Closure (Fechamento) chama uma função da função.*/



function armazenarSoma(x){
    return y => x + y
}

let soma1 = armazenarSoma(3);
console.log(soma1(5));

let soma2 = armazenarSoma(5);
console.log(soma2(10));



// ou 

function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

let Somas =  lembrarSoma(2);
console.log(Somas(5))


// ex


function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont ++;
    }

    return somarContador;
}


let result = contador(5);
result();
result();
result();

