// crie uma classe chamado de wordCounter que representa um contador de palavras

// A classe deve ter um construtor que inicializa um obj vazio

// A classe deve ter um metodo chamado de countWords que recebe uma string como parametro

// O metodo coutWords deve contar o numero de palavras na string fornecida e retornar o resultado

// considere que as palavras separada por espaço em branco


class WordCounter {
    constructor() {
        // Nenhuma inicialização necessária
    }

    countWords(string) {
        // Divide a string em palavras usando espaços como delimitador
        let palavras = string.trim().split(/\s+/);
        // Retorna o número de palavras
        return palavras.length;
    }
}

let minhaPalavra = new WordCounter();
console.log(minhaPalavra.countWords('Piter lucas')); // Saída: 2


//Explicação das mudanças:

//Usei string.trim() para remover espaços em branco extras no início e no final.
//Usei split(/\s+/) para dividir a string em palavras, considerando um ou mais espaços como delimitador.
//O método countWords retorna o número de palavras na string.