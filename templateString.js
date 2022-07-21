const up = texto => texto.toUpperCase()
console.log(`Eiiii... ${up('cuidado')}`);

console.log("1 + 1 = " + (1 + 1)); // sem template string
console.log(`1 + 1 = ${1 + 1}`); // com template string

const nome = 'Alessandro';
const sobrenome = 'Lins';
console.log(`Seu nome: ${nome} ${sobrenome}`);

const [a, b, c, d] = [2, 6, 7, 22]
const soma = a + b + c + d;
const subtracao = d - a;
const dividir = d / a;
console.log(`Soma: ${soma}\nSubtração: ${subtracao}\nDividir: ${dividir}`);

let pessoa = {
  nome: 'Ana',
  idade: 33,
  falar: function() {
    //return `Eu sou ${this.nome} e minha idade é ${this.idade}`;
    console.log(`Eu sou ${this.nome} e minha idade é ${this.idade}`);
  }
}
pessoa.falar();


