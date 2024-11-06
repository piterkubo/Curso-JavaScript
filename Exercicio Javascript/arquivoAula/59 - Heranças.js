// Uma classe pode herdar propriedades de outra classe por herança

// Para isso utilizamos extends

//ex

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }    
}



class Cachorro extends Mamifero{
   constructor(patas,raca){
    super(patas,patas)
    this.raca = raca;
   }
}

let yorkshire = new Cachorro(4, "yorkshire");

console.log(yorkshire.patas);