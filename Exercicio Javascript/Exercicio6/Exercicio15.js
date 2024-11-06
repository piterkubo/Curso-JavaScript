/*Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

Se o número for positivo e par, retorne "Positivo e Par".

Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

Se o número for negativo, retorne "Negativo".

Se o número for zero, retorne "Neutro".*/


function classificarNumero(numero){

    
    if(numero < 0 ){
        console.log("Negativo");
    }

    else if(numero == 0){
        console.log("Neutro");
    }

    else if(numero % 2 == 0){
        console.log("Positivo e Par");
    }

    else if(numero %2 == 1){
        console.log("Positivo e Impar");
    }
        
  
}


classificarNumero(0)