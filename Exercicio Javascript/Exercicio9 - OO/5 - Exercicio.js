// crie uma classe conta bancaria

// com as propriedades de saldo na conta corrente, saldo conta poupança e juros da poupança

// crie os metodos de deposito e saque, tambem um metodo para transferir dinheiro da conta poupança para a corrente

// Alem disso crie uma conta especial que herda da conta normal 

// na conta especial os juros são dobrados da conta normal


class Banco{
    constructor(saldoCorrente,saldoPoupanca, juroPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juroPoupanca = juroPoupanca;

    }


    DepositoCorrente(valor){
        this.saldoCorrente += valor;
        return this.saldoCorrente

    }


    DepositoPoupanca(valor){
        this.saldoPoupanca += valor;
        this.saldoPoupanca += (this.saldoPoupanca * this.juroPoupanca)/100
        return this.saldoCorrente
    }


    SaqueCorrente(valor){
        this.saldoCorrente -= valor;
        return this.saldoCorrente;
        
    }

    SaquePoupanca(valor){
        this.saldoPoupancaPoupanca -= valor;
        return this.saldoPoupanca;
    }



    TransferirConta(valor){
        this.saldoCorrente += valor;
        this.saldoPoupanca -= valor;
        return this.saldoCorrente;
    }


}


class ContaEspecial extends Banco{
    constructor(saldoCorrente,saldoPoupanca, juroPoupanca){
        super(saldoCorrente,saldoPoupanca, juroPoupanca * 2);
        
    }
}



let minhaConta = new Banco(1000, 1000,5,2000);


minhaConta.DepositoCorrente(50);

console.log(minhaConta.saldoCorrente);

minhaConta.DepositoPoupanca(120);

console.log(minhaConta.saldoPoupanca);

minhaConta.TransferirConta(176);

console.log(minhaConta.saldoCorrente);

console.log(minhaConta.saldoPoupanca);





let minhaContaEspecial = new ContaEspecial(5000,10000,2);





console.log(minhaContaEspecial);


minhaContaEspecial.SaqueCorrente(500);

console.log(minhaContaEspecial);
