const cliente = {
    nome: "Cinthia",
    idade: 29,
    cpf: "123456789",
    email: "cinthia@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))