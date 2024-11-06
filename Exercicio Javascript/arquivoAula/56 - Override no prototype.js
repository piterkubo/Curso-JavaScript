// Sempre que adicionamos uma propriedade a um objeto é criada uma identica no prototype

// podemos substituir a do prototype

//ex

class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
}

let poodle = new Cachorro('Poodle', 'Caramelo');


Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;

console.log(poodle);
console.log(poodle.patas);


console.log(Cachorro.prototype.raca);