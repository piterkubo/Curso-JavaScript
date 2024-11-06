// Propriedades unicas, que nao podem ser alteradas e nem criadas duas vezes

// podemos utilizar como uma constante, só que para propriedades de obj

//ex

class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }   

    latir(){
        console.log('Au Au');
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol();

Cachorro.prototype[patas] = 4; // Após criar Symbol funciona com uma variavel const o valor não muda

let golden = new Cachorro('Golden Retriever', 'Caramelo');

golden.latir();

console.log(golden.raca, golden.cor);

console.log(Cachorro.prototype.raca);



//Acessando o Symbol
console.log(Cachorro.prototype[patas]);

console.log(golden[patas])