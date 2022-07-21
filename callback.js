const notas = [7.7 , 6.5 , 8.3 , 3.6 , 7.1 , 9.0]

let notasBaixas = [];

notasBaixas = notas.filter(function(nota) {
    return nota < 7;
});
console.log(notasBaixas);

// callback + arrow function
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3);
