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

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
