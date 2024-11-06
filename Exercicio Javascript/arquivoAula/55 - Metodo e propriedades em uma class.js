// Não podemos adicionar propriedades na classe, so via prototype

// A class so aceita metodos;


class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log('Au au');
    }
}

Cachorro.prototype.patas = 4;


let Labrador = new Cachorro('Labrador', 'Caramelo');

console.log(Labrador.patas);

Labrador.latir()