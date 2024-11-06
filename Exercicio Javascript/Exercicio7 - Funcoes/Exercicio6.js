function VerificarDados(dados){
    if (typeof(dados) == "string"){
        console.log("String");
    }

    else if(typeof(dados) == "number"){
        console.log("Number");
    }

    else{
        console.log("Boleano");
    }
}

VerificarDados(true);




