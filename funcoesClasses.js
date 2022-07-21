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