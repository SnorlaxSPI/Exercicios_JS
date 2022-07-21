function teste1(num) {
  if(num > 7)
    console.log('Final');
}
teste1(6);
teste1(8);


const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log('Aprovado');
  }
  else {
    console.log('Reprovado');
  }
};
imprimirResultado(10);
imprimirResultado(1);

// Arrow function
const imprimirResultado2 = (nota) => {
  if(nota >= 7) {
    console.log('Aprovado -> Arrow function');
  }
  else {
    console.log('Reprovado -> Arrow function');
  }
}
imprimirResultado2(1)