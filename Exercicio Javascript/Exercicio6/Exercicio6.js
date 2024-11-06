// if, else if e else

const nome = "Lucas";

const idade = 18;

const temCNH = true;


if(idade >= 18 && temCNH == true){
    console.log(`${nome} voce tem ${idade} tem CNH. Pode digirir`);

}

else if(idade >= 18 && temCNH == false){
    console.log(`${nome} você tem ${idade} e não tem CNH. Não pode dirigir`);
}



else{
    console.log(`${nome} voce tem ${idade} e não tem CNH. Não pode dirigir`);
}