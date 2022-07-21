/*
const livro = 
{
  nome: "React Native",
  editora: "Casa do Código",
  paginas: "185",
  anunciar: function()
  {
    console.log("A Alura indoca o livro" + this.nome + "!")
  }
}
livro.anunciar()
*/

// criando uma classe 

/*

const livro = function(nome, editora, paginas)
{
  gNome = nome,
  gEditora = editora,
  gPaginas = paginas

  this.getNome = function()
  { return gNome }

  this.getEditora = function()
  { return gEditora }

  this.getPaginas = function()
  { return gPaginas }
}

const GraphQL = new livro("GraphQL", "Casa do Código", 143)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())

*/

class livro
{
  constructor(nome, editora, paginas)
  {
    this.nome = nome
    this.editora = editora
    this.paginas = paginas
  }
  anunciarTitulo()
  {
    console.log(`Titulo: ${this.nome}`)
  }
  descreverTitulo()
  {
    console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
  }
}

const NodeJS = new livro("Primeiros passos com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()

// Herança

class livroColecao extends livro
{
  constructor(nome, nomeColecao)
  {
    super(nome)
    this.nomeColecao = nomeColecao
  }

  descreverColecao()
  {
    console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
  }
}

const logicadeProgramacao = new livroColecao("Lógica de Programação", "Comece a Programar")
logicadeProgramacao.descreverColecao()