//exemplo de classe js

class Pessoa {
    constructor(nome, sobrenome, cpf, email){ //atributos da classe
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    exibirNomeCompleto(){ //comportamento
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

//programador herda características de pessoa (super chamada o constructor da classe Pessoa para Programador)
//também recebe um parâmetro a mais que é chamado pelo this

class Programador extends Pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

//objeto é a instância de uma classe

const novoDev = new Programador("Cinthia", "Quadrado", "cinthia@email.com", "Javascript")