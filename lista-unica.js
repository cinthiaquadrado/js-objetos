const clientes = [
    {
        nome: "Felipe",
        cpf: "123456789",
        dependentes: [{
            nome: "Cinthia",
            parentesco: "filha",
            dataNasc: "04/12/1992"
        },
        {
            nome: "Camila",
            parentesco: "filha",
            dataNasc: "12/07/1994"
        }],
    },
    {
        nome: "Filippo",
        cpf: "987654321",
        dependentes: [{
            nome: "Vinicius",
            parentesco: "filho",
            dataNasc: "02/07/1991"
        },
        {
            nome: "Evandro",
            parentesco: "filho",
            dataNasc: "20/02/2003"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

//console.log(listaDependentes)
console.table(listaDependentes)