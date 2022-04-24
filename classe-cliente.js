class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const cinthia = new Cliente("Cinthia", "cinthia@email.com", "123456789", 100)

const vinicius = new Cliente("Vinicius", "vinicius@email.com", "987654321", 200)

cinthia.exibirSaldo()
console.log(cinthia)

vinicius.exibirSaldo()
console.log(vinicius)