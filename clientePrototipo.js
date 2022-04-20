function Cliente (nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor) {
    this.saldo += valor
  }
}

const cinthia = new Cliente ("Cinthia", "54321", "cinthia@email.com", 100)

function ClientePoupanca (nome, cpf, email, saldo, saldoPoup) {
  Cliente.call (this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup
}

const vini = new ClientePoupanca ("Vini", "678910", "vini@email.com", 200)
                                  
ClientePoupanca.prototype.depositarPoup = function(valor) {
  this.saldoPoup += valor
}

console.log(cinthia.hasOwnProperty("saldoPoup")) //false
console.log(vini.hasOwnProperty("saldoPoup")) //true
console.log (cinthia instanceof Cliente) //true 

//instanceof testa a presença da função construtora no prototype do objeto

console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)
