/*Objetos são coleções de propriedades


[] =  array
 
{} = OBJ */



let pessoas = {
    nome:"Piter",
    idade:39,
    Profisso:"Dev",

    BoasVidas: function(){
        console.log("Avançar sempre! Desistir jamais");
    }
}


console.log(pessoas.nome + " " + pessoas.idade + " " + pessoas.Profisso);


pessoas.BoasVidas();