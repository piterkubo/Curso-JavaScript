// Não podemos controlar os dados que o usuario envia, então para o bom funcionamento
// do software, devemos tratar eles

// Veja um exemplo de tratamento de number

function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        return null;
    }
    else{
        return resultado;
    }
}

console.log(checarNumero(5));
console.log(checarNumero('Teste'));