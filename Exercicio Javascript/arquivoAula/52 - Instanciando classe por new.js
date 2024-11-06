// Em muitads linguagens temos a possibilidade de instanciar um obj com o new no js tambem.

// ex

function Cachorro(raca, pata, cor){
    this.raca = raca;
    this.pata = pata;
    this.cor = cor;
    this.latir = function(){
        console.log('Au au');
    }
}


let husky = new Cachorro('Husky',4, 'Preto-branco');

console.log(husky.raca);
console.log(husky.pata);
console.log(husky.cor);

husky.latir();