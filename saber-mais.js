// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//         // console.log(`${pessoa.nome}`)
//         console.log(`${this.nome}`) //não acopla o método ao nome do objeto
//     }
// }

// pessoa.imprimeNome()

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}

const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "Vinicius",
    email: "v@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
pessoa2.imprimeInfo()

function Pessoa(nome, email){
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Pessoa("Camila", "a@email.com")
const pessoa4 = new Pessoa("Valter", "v@email.com")

pessoa3.imprimeNomeEmail()
pessoa4.imprimeNomeEmail()