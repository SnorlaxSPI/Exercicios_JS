function horaTrabalhada(nome, salario) {
  return {
    nome,
    salario,
    getSalario1() { return (salario / 220) }
  }
}
const f1 = horaTrabalhada('Alessandro', 2700);
console.log(`Horas Trabalhadas: ${f1.getSalario1().toFixed(2)}`);

// Arrow Function

const horastrabalhadas = (nome, salario) => {
  return {
  nome, 
  salario,
  getSalario2() 
    { return (salario / 220) }
  }
}

const f2 = horastrabalhadas('Alessandro', 3200);
console.log(`Nome: ${f2.nome}\nSalário - dia: R$ ${f2.getSalario2().toFixed(2)}`)