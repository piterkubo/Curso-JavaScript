/* Recursion  permite uma função se chamar novamente*/

function retornarUmNumero(n){
    if(n % 2 == 0){
        console.log("O numero n agora é par " + n);
    }

    else{

        console.log(n);

        retornarUmNumero(n-1);
    }
}

retornarUmNumero(33);


/*Outro Exemplo*/


function recursao(n){
    if(n - 1 < 2){
        console.log.apply("Recursao parou");
    }

    else if(n % 2 != 0){
        console.log("Numero impar " + n);
        recursao(n - 1)
    }

    

    else{
        console.log("Numero par " + n);
        recursao(n - 2);

    }
}

recursao(39);