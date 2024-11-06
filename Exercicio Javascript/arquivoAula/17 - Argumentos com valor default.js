/* Argumento com valores  pre configurado de default*/


function repetirFrase(frase, n=2){
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("Testados",5);

repetirFrase("Só 2 vezes");