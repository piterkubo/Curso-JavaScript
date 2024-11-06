// Podemos verificar quem é o pai do objeto utilizado o instanceof

// Se tiver herança de alguma classe, retorna true. No ex se tiver herança de mamifero

//ex


class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
   constructor(patas,raca){
    super(patas,patas);
    this.raca = raca;
   }
}


let bingo = new Cachorro(4, "Shitzu");

console.log(new Cachorro instanceof Mamifero);