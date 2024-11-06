// Alem de propriedades, podemos criar a classe base ja com metodos

// Basta definir ao prototype o metodo desejado.


function Cachorro(raca){
    this.raca = raca;
}


Cachorro.prototype.uivar = function(){
    console.log('Auuuuuuu');
}

let pug = new Cachorro("Pug");

console.log(pug.raca);

pug.uivar();