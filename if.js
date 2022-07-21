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

