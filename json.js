//formato json
{
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "Diego Martins de Pinho",
    "categoria": "programação"
  }
//json com dois conjuntos de propriedade/valor
//um tem um valor de string (editora) e catálogo é um array de objetos

{
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    },
    {
      "id": 59,
      "titulo": "ECMAScript 6",
      "autor": "Diego Martins de Pinho",
      "categoria": "programação",
      "versoes": ["ebook"]
    },
    {
    "id": 39,
    "titulo": "Orientação a Objetos",
    "autor": "Thiago Leite",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
    }
   ]}

//chaves devem estar entre aspasd duplas
//json aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays
//não é posível declarar funções/métodos
//não são permitidas vírgulas após o último conjunto de chave/valor do objeto

//json é um formato criado para transferência de dados
//assim, é necessário convertê-lo para um objeto js para que os dados possam ser  usados em um programa

JSON.parse() //converte JSON para um objeto js
JSON.stringify() //converte um objeto de js para JSOn

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

//resultado

{"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}

//processo inverso

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)

//resultado 2

{
    id: 50,
    titulo: 'Primeiros Passos com NodeJS',
    autor: 'João Rubens',
    categoria: 'programação',
    versoes: [ 'ebook', 'impresso' ]
   }
   
//o processo de converter estruturas de daos em sequências de bytes ou caracteres é chamado de serialização

