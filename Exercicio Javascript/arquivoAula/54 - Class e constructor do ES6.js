// Com a versao do ES6, uma possibilidade de cariar uma classe (obj) com construtor foi adicioanda

// Entao não precisamos mais criar por meio de uma funcoa veja;

//ex

class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
}


let labrador = new Cachorro('Labrador');

console.log(labrador.raca);