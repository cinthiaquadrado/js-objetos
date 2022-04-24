//call() permite que uma função seja chamada com parâmetros e valor de this específicos

function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}

const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

imprimeNomeEmail.call(cliente1, "cliente especial")
imprimeNomeEmail.call(cliente2, "cliente estudante")

//como a função está sendo chamada com call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos

//apply() recebe os argumentos em array em vez de separados

function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`${tipoCliente} da agência ${agencia}: - nome ${this.nome}, email: ${this.email}`)
}

const cliente3 = {
    nome: "Jorge",
    email: "j@email.com"
}

const cliente4 = {
    nome: "Silvia",
    email: "s@email.com"
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente3, clienteEspecial)
imprimeNomeEmail.apply(cliente4, clienteEstudante)

//bind prende uma função ao contexto de um objeto

const personagem = {
    nome: "Princesa Leia",
    apresentar: function() {
        return `a personagem é ${this.nome}`
    }
}

//o objeto acima conté uma propriedade nome e um método apresentar que retorna um string com nome
//this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, este objeto

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico()) //a personagem é undefined

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())

//acima, usamos bind para ligar a função que atribuimos a personagemGenerico ao objeto personagem
//sempre que executada, a função original vai usar o objeto personagem como contexto de execução
//this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades
