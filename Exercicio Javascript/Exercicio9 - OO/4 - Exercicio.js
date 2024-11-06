
// criar uma clase que simule um carro

// Propriedades: marca, cor, gasolina restante

// crie um metodo de dirigir o carro que vai diminuindo a gasolina gradativamente 

// E um de abastecer para aumentar a gasolina quando necessario.



class Carro{

    constructor(marca, cor, gasolina, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
        

    }


    Dirigir(km){

        let kmConsumido = km / this.consumo;

        this.gasolina -= kmConsumido;
    }


    abastecer(litros){

       
        this.gasolina += litros;
    }

}


let carro = new Carro("Hyunday", "Prata", 100, 14);

carro.Dirigir(100);

console.log(carro.gasolina);


carro.abastecer(10);

console.log(carro.gasolina);