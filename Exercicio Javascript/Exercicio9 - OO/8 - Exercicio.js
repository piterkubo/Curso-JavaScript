// crie uma classe chamada de ContaBancaria que representa uma conta bancaria

// a classe deve ter os seguintes atributos (numeroConta, Saldo)


// A classe deve ter os seguintes metodos(depositar(valor) sacar(valor) consultarSaldo())


class ContaBancaria{

    constructor(numeroConta,Saldo){
        this.numeroConta = numeroConta;
        this.Saldo = Saldo;
    }

    Depositar(valor){
        this.Saldo += valor;
    }

    Sacar(valor){

        if(this.Saldo < valor){
            console.log("Saldo insuficiente")
        }

        else{
            this.Saldo -= valor;
        }
    }

    ConsultarSaldo(){
        console.log("O seu saldo é " + this.Saldo);
    }

}

let MinhaConta = new ContaBancaria(67413,1000);

MinhaConta.Depositar(2000);

console.log(MinhaConta.ConsultarSaldo())

MinhaConta.Sacar(4000);

MinhaConta.ConsultarSaldo();