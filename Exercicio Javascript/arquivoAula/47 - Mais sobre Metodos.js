// Normalmente os metodos integragem com os obs

// ate mudamos os valores das suas propriedade para corresponder a logica do programa desenvolvido.

// EX

let pessoas = {
    nome:'',
    setNome:function(novoNome){
        this.nome = novoNome;
    },
    getNome:function(){
        return this.nome;
    }
}

pessoas.setNome("Piter");

console.log(pessoas.getNome());



let cachorro ={

    raca: 'nao tem',

    latir: function(){
        console.log("Au Au");
    },
    uivar: function(){
        console.log("Auuuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("Agrrrrrrr");
    },

    setRaca:function(raca){
        this.raca = raca
    },

    getRaca:function(){
        return "A raça do meu cachorro é " + this.raca;
    }

}


cachorro.setRaca("YorkShare");

console.log(cachorro.raca)

console.log(cachorro.getRaca())