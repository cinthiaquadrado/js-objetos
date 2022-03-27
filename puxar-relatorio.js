const cliente = {
    nome: 'Cinthia',
    idade: 29,
    cpf: '123456789',
    email: 'cinthia@gmail.com',
    dependentes: [
      { nome: 'Layla', parentesco: 'filha', dataNasc: '03/02/2021' },   
      { nome: 'Vinicius', parentesco: 'marido', dataNasc: '02/07/1991' }
    ],
    saldo: 100,
    depositar: function(valor) {
    this.saldo += valor
  }
}

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ===> ${cliente[info]}`
    }
}

console.log(relatorio)