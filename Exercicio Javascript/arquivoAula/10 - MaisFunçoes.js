/*função multiplicar

function multiplicarTresNumero(a,b,c){
    return a * b * c;
}

console.log(multiplicarTresNumero(21,40,10));


const resultado = multiplicarTresNumero(10,50,9);

console.log(resultado);*/



function podeDirigir(idade, cnh){
    if(idade <=18 && cnh == false){
        console.log("Pode dirigir!");
    }

    else {
        console.log("Não pode dirigir!");
    }

   
}

console.log(podeDirigir(17,false));