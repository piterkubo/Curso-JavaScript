//Adicione a propriedade janela do onibus com o valor de 20;

// delete a propriedade roda;

//imprima a propriedade de janelas no console.


const Onibus = {
    "Rodas":8,
    "LimitePassageiro":40,
    "Portas":2,
    
};

Onibus.Janela = true;

Onibus.Janela  = 20;

delete Onibus.Rodas;

console.log(Onibus);

console.log(Onibus.Janela);