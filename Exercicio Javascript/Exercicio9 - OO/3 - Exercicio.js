// Crie um obj que simula um endereco de um cliente

// propriedade: Rua, Bairro, Cidade e Estado

// No construtor o endereço ja deve ser definido por completo

// crie Metodos para atualizar todas as propriedades

class End{
    
    constructor(rua,bairro,cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    // usando o seters

    set novoEndereco(novoend){
        this.rua = novoend;
    }
    
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }

}


let meuEnd = new End('Rua Murutu', "Jd Silvestre", "Guarulhos","São Paulo");


console.log(meuEnd);

meuEnd.novoEndereco = "Rua João Batista de Godoy";
meuEnd.novoBairro = "Jd das Oliveiras";
meuEnd.novaCidade = "São Paulo";
meuEnd.novoEstado = "São Paulo";

console.log(meuEnd)