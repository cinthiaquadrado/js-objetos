const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

//const guerreiro = {fichaGuerreiro, equipoGuerreiro}
//console.log(guerreiro)

// const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}
// console.log(guerreiro)

//se for usado com objetos que tenham mesmas chaves/propriedades, o JS vai sobrescrever o valor à medida que encontra novos

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

const personagens = {...mago, ...guerreiro, ...ranger}
console.log(personagens)