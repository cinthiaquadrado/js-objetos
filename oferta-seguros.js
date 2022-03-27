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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente)) //apenas valores
console.log(Object.entries(cliente)) //arrays
oferecerSeguro(cliente) //print de oferta de seguro