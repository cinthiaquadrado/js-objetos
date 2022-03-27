//objeto literal

// const objPersonagem = {
//     nome: "Harry Potter",
//     classe: "mago",
//     nivel: "20"
// }

//o que aconte com cópias?

// const objPersonagem2 = objPersonagem
// objPersonagem2.nome = "Harry Potter, o bruxo"

//objPersonagem2 serviu como referência para o objeto original.
//assim, qualquer alteração em qualquer dos objetos altera ambos.
//Js acessa os valores fazendo referência ao original, mas não cria uma cópia.

// console.log(objPersonagem.nome)
// console.log(objPersonagem2.nome)

//acesso por cópia funciona com tipos primitivos.

let num = 50
let num2 = num

num2 = 100
console.log(num)
console.log(num2)

//objetos podem ser criados através do método object.create()

const objPersonagem = {
    nome: "Harry Potter",
    classe: "mago",
    nivel: "20"
}

const objPersonagem2 = 
Object.create(objPersonagem)
objPersonagem2.nome = "Hagrid, o amável"

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)