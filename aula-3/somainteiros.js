// somapos.js
// Node.js + | Laço DO...WHILE | Soma apenas números positivos

const leia = require("readline-sync");

let somaPositivos = 0;
let numero;

console.log("Digite numeros inteiros. Para encerrar, digite 0.");

do {
  // \n apenas para formatar como no exemplo do enunciado
  numero = leia.questionInt("\nDigite um número: ");

  // Soma somente se for positivo
  if (numero > 0) {
    somaPositivos += numero;
  }
  // Números negativos são ignorados; 0 encerra

} while (numero !== 0);

// Saída final no formato pedido
console.log(`\nA soma dos números positivos é: ${somaPositivos}`);
``