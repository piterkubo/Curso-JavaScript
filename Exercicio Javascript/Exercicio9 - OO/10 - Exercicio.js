// Crie uma classe chamado livro que representa um livro em uma biblioteca

// a classe deve ter os seguintes atributos

// titulo representa o titulo do livro em string

// autor representa o autor do livro em string

// disponivel representa a disponibilidade do livro em bool

// A classe deve ter os seguintes metodos

// Emprestar() verifica se o livro esta disponivel para emprestimo, e se estiver, atualizar a disponibilidade para false

// devolver() verifica se o livro não estiver disponivel, para emprestimo e se não estiver, atualizar para true

// consultarDisponibilidade() retorna a disponibilidade atual do livro


class Livro{
    constructor(titulo, autor,disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
    

    emprestar() {
        if (this.disponivel) {
            console.log('Livro disponível, pode levar.');
            this.disponivel = false;
        } else {
            console.log('O livro já está emprestado.');
        }
    }

    devolver() {
        if (!this.disponivel) {
            console.log('Obrigado pela devolução.');
            this.disponivel = true;
        } else {
            console.log('Este livro já está na biblioteca.');
        }
    }

    consultarDisponibilidade() {
        if (this.disponivel) {
            console.log('O livro está disponível.');
        } else {
            console.log('O livro não está disponível.');
        }
    }
}


let meuLivro = new Livro('O rapto do líquido mágico', 'Fulana', true);

meuLivro.consultarDisponibilidade(); // O livro está disponível.
meuLivro.emprestar(); // Livro disponível, pode levar.
meuLivro.consultarDisponibilidade(); // O livro não está disponível.
meuLivro.devolver(); // Obrigado pela devolução.
meuLivro.consultarDisponibilidade(); // O