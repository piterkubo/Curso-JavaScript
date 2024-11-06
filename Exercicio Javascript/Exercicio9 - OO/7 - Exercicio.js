// crie uma classe chamado de retangulo que representea um retangulo

// a classe deve ter os seguintes atributos

// largura represetando a largura do retangulo(numero maior que zero)

// Altura representando a altura do retangulo maior que zero.

// A classe deve ter os seguintes metodos

// calcularArea() retorna a area do retangulo (largura * alturo)

// calcularPerimetro() retorna o perimetro do retangulo (2 *(largura + altura))


class Retangulo{

    


    calcularArea(alt,lar){

        let altura = alt;
        let largura = lar;

        let result = largura * altura;

        return result;

        
    }


    calcularPerimetro(lar,alt){
        let altura = alt;
        let largura = lar;

        let result = (2 *(largura + altura));

        return result;

    }
}



let calcular = new Retangulo();


console.log(calcular.calcularArea(10,15));


console.log(calcular.calcularPerimetro(10,15));



// ou 



class Retangulo {
    constructor(largura, altura) {
        if (largura > 0 && altura > 0) {
            this.largura = largura;
            this.altura = altura;
        } else {
            throw new Error("A largura e a altura devem ser maiores que zero.");
        }
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}

// Criando uma instância da classe Retangulo
let retangulo = new Retangulo(15, 10);

console.log("Área:", retangulo.calcularArea()); // 150
console.log("Perímetro:", retangulo.calcularPerimetro()); // 50
