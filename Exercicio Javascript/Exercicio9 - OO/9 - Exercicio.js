// crie uma classe chamada de Voo que representa um voo em um sistema de reserva de voo

// A classe deve ter os seguintes atributos

// codigoVoo representando o codigo unico do voo


// origem representa a cidade de origem do voo

// destino representando a cidade de destino do voo

// assento disponivel representa a quantidade de assento disponivel no voo

// A classe de ver o seguintes metodos 


// reservarAssento() verificar se ha assentos disponiveis no voo, e se houver decrementar a quantida de assento disponivel em um


// consultarAssentosDispoinvel() retornar a quantidade de assentos disponivel no voo.



class Voo{
    constructor(CodigoVoo,origem,destino, assentoDisponiveis){
        this.CodigoVoo = CodigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentoDisponiveis = assentoDisponiveis;
    }


    reservarAssento(assento){
        if(this.assentoDisponiveis >= assento){
            this.assentoDisponiveis -= assento;
            console.log('Assento Reservado');
        }
    }


    consultarAssentosDisponiveis(){
        console.log(this.assentoDisponiveis)
    }


}


let minhaReserva = new Voo(1,'SaoPaulo', 'Piaui', 20);

minhaReserva.reservarAssento(2);

minhaReserva.consultarAssentosDisponiveis();