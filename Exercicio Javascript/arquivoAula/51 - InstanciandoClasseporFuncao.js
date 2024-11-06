// Construtores são formas de instanciar uma classe em uma linguagem de programacao

// instanciar = criar um obj novo

// No construtor ja podemos definir propriedades


//Ex


function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }

    return cachorro;
    
}



let doberman = criarCachorro("Doberman", 4, "Preto");



console.log(doberman);

doberman.latir();