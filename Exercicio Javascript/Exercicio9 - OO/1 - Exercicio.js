// Crie uma classe que simula uma conta no banco(utilize a forma que preferir)

// Deve conter a propriedade saldo

// metodo depositar e sacar

// teste os metodo

class Banco{
    constructor(saldo){
  
        this.saldo = saldo;
    }


    Depositar(valor){
        this.valor = valor;
        this.saldo = this.saldo + valor;
        return  this.saldo;
    }

    Sacar(valor){
        this.valor = valor;
        this.saldo = this.saldo - valor;
        return this.saldo;
    }

}

let MinhaConta = new Banco(1000);

console.log(MinhaConta.Depositar(5000));

console.log(MinhaConta.Sacar(4000));