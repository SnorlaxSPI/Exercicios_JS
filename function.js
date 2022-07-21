// Função sem retorno
function imprimirSoma(a, b) {
  console.log("Função sem retorno: ", a + b)
}
imprimirSoma(2, 4)

// Função com retorno
function soma(a, b = 2) {
  return a + b;
}
console.log("Função com retorno: ", soma(5))

// Armazenando uma função em uma variável
const imprimirSoma1 = function (a, b) {
  console.log("Função em uma variável ", a + b)
}
imprimirSoma1(5, 5)

// Armazenando uma função arrow em uma variável
const soma1 = (a, b) => {
  return a + b
}
console.log("Arrow Function: ", soma1(4, 4))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log("Retorno implícito: ", subtracao(5, 2)); // sem template string
console.log(`Retorno implícito ${subtracao(7, 2)}`); // com template string
