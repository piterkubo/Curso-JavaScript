function faixaEtaria(idade){
    if(idade <=12){
        console.log("Criança menor de 12 anos");
    }

    else if(idade > 12 && idade <= 24  )
    {
        console.log("Jovem")
    }

    else{
        console.log("Adulto")
    }
}

faixaEtaria(25);