// Objetivo: buscar um número dentro de um Set e informar se foi encontrado.

import readlineSync from "readline-sync";

// 1) Collection Set com 10 números inteiros (sem repetição)
const valoresIniciais: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const conjunto: Set<number> = new Set<number>(valoresIniciais);

// 2) Mostrar os índices (posições) de forma visual (0 a 9)
console.log("\nÍndices (posições):");
for (let i = 0; i < valoresIniciais.length; i++) {
  const vermelho = "\x1b[31m"; // cor vermelha para destacar o índice (apenas visual)
  const reset = "\x1b[0m";
  console.log(`${vermelho}${i}${reset}`);
}

// 3) Mostrar o "List" (como no exemplo) com os valores do Set
console.log("\n\nList");
for (const valor of conjunto) {
  console.log(valor);
}

// 4) Entrada de dados: pedir um número inteiro
const entrada = readlineSync.question("\n\nDigite o numero que voce deseja encontrar: ");
const numeroBuscado = Number(entrada);

// Validação simples
if (!Number.isInteger(numeroBuscado)) {
  console.log("\nEntrada inválida! Por favor, digite um número inteiro.");
  process.exit(1);
}

// Forma direta (ideal com Set):
const encontrado = conjunto.has(numeroBuscado);

// 6) Saída de dados
if (encontrado) {
  console.log(`\nO número ${numeroBuscado} foi encontrado!\n`);
} else {
  console.log(`\nO número ${numeroBuscado} não foi encontrado!\n`);
}
