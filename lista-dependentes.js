const cliente = {
    nome: "Cinthia",
    idade: 29,
    cpf: "123456789",
    email: "cinthia@gmail.com",
    dependentes: [{ nome: 'Layla', parentesco: 'filha', dataNasc: '03/02/2021' }] //já tenho um dependente cadastrado
}

//adiciono mais um dependente
cliente.dependentes.push({
    nome: "Vinicius",
    parentesco: "marido",
    dataNasc: "02/07/1991"
})

// console.log(cliente)

const maisVelho = cliente.dependentes.filter(dependente => dependente.dataNasc==="02/07/1991")

console.log(maisVelho)
console.log(maisVelho[0].nome) //zero é utilizado porque ele está nesse lugar na array de objetos