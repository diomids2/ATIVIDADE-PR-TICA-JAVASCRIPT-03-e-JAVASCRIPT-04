const leia = require("readline-sync");

// Vetor fixo com 10 números não ordenados e não repetidos
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor: ", vetor.join(" "));
console.log("\nDigite um numero para pesquisar no vetor.\n");

const numero = leia.questionInt("Digite o numero que você deseja encontrar: ");

let encontrado = false;
let posicao = -1;

// Laço para percorrer o vetor
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numero) {
    encontrado = true;
    posicao = i;
    break; // Para quando encontrar
  }
}

// Saída conforme enunciado
if (encontrado) {
  console.log(`\nO numero ${numero} está localizado na posição: ${posicao}`);
} else {
  console.log(`\nO numero ${numero} não foi encontrado!`);
}