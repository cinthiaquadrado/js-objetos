const objPersonagem = {
    nome: "Harry",
    classe: "bruxo",
    nível: "20",
    aliado: {
        nome: "Hagrid",
        classe: "bruxo"
    },
    status: "desaparecido"
}

//remove do objeto o valor da propriedade, assim como a chave

delete objPersonagem.aliado

// console.log(objPersonagem.aliado)
// console.log(objPersonagem)

delete objPersonagem["status"]
console.log(objPersonagem.status)
console.log(objPersonagem)