const cliente = {
    nome: "Cinthia",
    idade: 29,
    cpf: "123456789",
    email: "cinthia@gmail.com"
}

cliente.dependentes = {
    nome: "Layla",
    parentesco: "filha",
    dataNasc: "03/02/2021"
}

console.log(cliente)

cliente.dependentes.nome = "Layla Califórnia"

console.log(cliente)

// cliente.dependentes = {
//     nome: "Vinicius",
//     parentesco: "marido",
//     dataNasc: "02/07/1991"
// }

// console.log(cliente)