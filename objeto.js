const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Alessandro',
    idade: 39,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 444,
      cidade: 'Ribeirao Preto'
    }
  },

  condutores: [{
    nome: 'Alessandro',
    idade: 39,
  }, {
    nome: 'Bia',
    idade: 30,
  }]
};

carro.proprietario.endereco.numero = 1000;
console.log(carro);