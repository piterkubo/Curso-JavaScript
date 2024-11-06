// get serve para regatar o valor de uma propriedade

// set serve para alterar o valor de uma propriedade


class Cachorro{
    constructor(raca){
        this.raca = raca;
    }

    get verRaca(){
        return ' A raça é ' +  this.raca;
    }

    set novaRaca(value){
        this.raca = value;
    }
}

let golden  = new Cachorro("Pastor Alemao");

console.log(golden);

golden.novaRaca = 'Golden'

console.log(golden.verRaca);