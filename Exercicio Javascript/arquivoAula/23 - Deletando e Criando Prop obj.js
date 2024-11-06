/*Podemos add e deletar elemento dentro do obj*/



let carro = {

    marca: "Hyundai",
    porta: 4,
    cor: "prata",
    motor:1.00,
}


console.log(carro);

delete carro.cor; /*delete*/

carro.tetoSolar = true; /*acrescenta*/

console.log(carro)