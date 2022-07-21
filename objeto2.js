//function criarFuncionario (nome, salarioBase, faltas) {
//  return {
//    nome,
//    salarioBase,
//    faltas,
//    getSalario() {
//      return (salarioBase / 30) * (30 - faltas);
//    }
//  };
//};

//const f1 = criarFuncionario('João', 2700, 1);
//console.log(f1.getSalario());

//const soma = (a, b) => (a + b);
//console.log(`A soma de A e B é ${soma(4,4)}`);

function horaTrabalhada(nome, salario) {
  return {
    nome,
    salario,
    getSalario1() { return (salario / 220) }
  }
}
const f1 = horaTrabalhada('Alessandro', 2700);
console.log(`Hora Trabalhada: ${f1.getSalario1().toFixed(2)}`);
