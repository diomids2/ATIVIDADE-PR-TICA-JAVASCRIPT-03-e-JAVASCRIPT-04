// Objetivo: buscar um número dentro de um array e mostrar sua posição, se existir.

import readlineSync from "readline-sync";

// 1) Collection Array com 10 números inteiros
const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// 2) Mostrar os índices (posições) de forma visual
console.log("\nÍndices (posições):");
for (let i = 0; i < numeros.length; i++) {
  // Apenas para destacar visualmente (ANSI): vermelho para o índice
  const vermelho = "\x1b[31m";
  const reset = "\x1b[0m";
  process.stdout.write(vermelho + i + reset + (i < numeros.length - 1 ? "\n" : ""));
}

// 3) Mostrar o título e os valores do array
console.log("\n\nArray");
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// 4) Entrada de dados: pedir um número inteiro
const entrada = readlineSync.question("\n\nDigite o numero que voce deseja encontrar: ");
const numeroBuscado = Number(entrada);

// Validação simples (confere se é um número mesmo)
if (Number.isNaN(numeroBuscado)) {
  console.log("\nEntrada inválida! Por favor, digite um número inteiro.");
  process.exit(1);
}

// 5) Buscar o número no array (usando laço de repetição manual para didática)
let posicaoEncontrada = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroBuscado) { // laço condicional
    posicaoEncontrada = i;
    break; // achou, pode parar
  }
}

// 6) Saída de dados: exibir o resultado
if (posicaoEncontrada !== -1) {
  console.log(`\nO número ${numeroBuscado} está localizado na posição: ${posicaoEncontrada}\n`);
} else {
  console.log(`\nO número ${numeroBuscado} não foi encontrado!\n`);
}
